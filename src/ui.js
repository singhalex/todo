import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import Task from './task';
import Project from './project';
import projectList from './project-list';

const taskArea = document.querySelector('#task-area');
function clearTaskArea() {
  taskArea.innerHTML = '';
}

function buildTaskPage(indexOfProject) {
  clearTaskArea();
  const currentProject = projectList.getList()[indexOfProject];

  // Displays the currently selected project title
  const projectTitle = document.createElement('h2');
  projectTitle.innerText = currentProject.getTitle();
  projectTitle.setAttribute('id', 'project-title');
  taskArea.appendChild(projectTitle);

  // Loop through task list to build cards
  let indexCounter = 0;
  currentProject.getTaskList().forEach((task) => {
    const taskCard = document.createElement('div');
    taskCard.setAttribute('class', 'card');
    taskCard.dataset.index = indexCounter;

    // Add the title to the task card
    const taskTitle = document.createElement('p');
    taskTitle.innerText = task.getTitle();
    taskCard.appendChild(taskTitle);

    // Add the due date to the task card
    const taskDate = document.createElement('p');
    if (task.getDueDate() === '') {
      taskDate.innerText = task.getDueDate();
    }
    if (task.getDueDate() !== '') {
      taskDate.innerText = format(parseISO(task.getDueDate()), 'MM/dd/yy');
    }
    taskCard.appendChild(taskDate);

    // Style card if high priority
    if (task.getPriority() === true) {
      taskCard.classList.add('high-priority');
    }

    // Add delete button to the task card
    const deleteTaskButton = document.createElement('button');
    deleteTaskButton.setAttribute('class', 'delete-task');
    deleteTaskButton.innerText = 'X';
    deleteTaskButton.addEventListener('click', (e) => {
      e.stopPropagation();
      currentProject.deleteTaskFromList(taskCard.dataset.index);
      buildTaskPage(indexOfProject);
    });
    taskCard.appendChild(deleteTaskButton);

    taskArea.appendChild(taskCard);
    indexCounter += 1;
  });
}

const sideBar = document.querySelector('#project-container');
const buildSideBar = () => {
  // Clear out the sidebar
  sideBar.innerHTML = '';

  // Create a card for each project in the array
  let counter = 0;
  projectList.getList().forEach((project) => {
    const projectCard = document.createElement('div');
    projectCard.setAttribute('class', 'project-card');
    projectCard.dataset.index = counter;
    const projectCardText = document.createElement('p');
    projectCardText.innerText = project.getTitle();
    projectCard.appendChild(projectCardText);

    projectCard.addEventListener('click', () => {
      buildTaskPage(projectCard.dataset.index);
      projectList.getList().forEach((item) => {
        item.setDisplayed(false);
      });
      project.setDisplayed(true);
    });

    // Add a delete button and rebuild sidebar
    if (project.getTitle() !== 'Inbox') {
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'X';
      deleteButton.setAttribute('class', 'delete-project-button');
      projectCard.appendChild(deleteButton);
      deleteButton.addEventListener('click', (event) => {
        event.stopPropagation();
        if (projectList.getList()[projectCard.dataset.index].getDisplayed() === true) {
          buildTaskPage(0);
          projectList.getSpecificProject(0).setDisplayed(true);
        }
        projectList.deleteProject(projectCard.dataset.index);
        buildSideBar();
      });
    }

    sideBar.appendChild(projectCard);
    counter += 1;
  });
};

// Adds a task to the displayed project and displays it in the task area
const addTask = () => {
  let indexCounter = 0;
  projectList.getList().forEach((project) => {
    if (project.getDisplayed() === true) {
      // Move inputs into new task
      const newTaskTitle = document.querySelector('#task-input');
      const newTaskDate = document.querySelector('#due-date');
      const newTaskPriority = document.querySelector('#high-priority');
      const newTask = Task(newTaskTitle.value, 'test', newTaskDate.value, newTaskPriority.checked);

      project.addTask(newTask);
      buildTaskPage(indexCounter);
    }
    indexCounter += 1;
  });
};

function createNewProjectPrompt() {
  const projectPrompt = document.querySelector('#create-project-prompt');
  projectPrompt.innerHTML = '<button id="new-project-button">＋ New Project</button>';
  const newProjectPromptButton = document.querySelector('#new-project-button');
  newProjectPromptButton.addEventListener('click', (e) => {
    e.preventDefault();
    projectPrompt.innerHTML = `<form action="">
        <input type="text" placeholder="Project Name" id="project-name" />
          <div id="button-container">
            <button id="add">Add</button>
            <button id="cancel">Cancel</button>
          </div>
      </form>`;
    const projectNameInput = document.querySelector('#project-name');
    projectNameInput.focus();
    const addButton = document.querySelector('#add');
    addButton.addEventListener('click', (e) => {
      e.preventDefault();
      const newProject = Project(projectNameInput.value);
      projectList.addToList(newProject);
      buildSideBar();
      createNewProjectPrompt();
    });
    const cancelButton = document.querySelector('#cancel');
    cancelButton.addEventListener('click', (e) => {
      e.preventDefault();
      createNewProjectPrompt();
    });
  });
}

function createNewTaskPrompt() {
  const taskPrompt = document.querySelector('#new-task-prompt');
  taskPrompt.innerHTML = '<button id="new-task-button">+ New Task</button>';
  const newTaskButton = document.querySelector('#new-task-button');
  newTaskButton.addEventListener('click', (e) => {
    e.preventDefault();
    taskPrompt.innerHTML = `<form action="" id="">
        <label for="task-input" required="">Task Name</label>
        <input name="task_input" id="task-input">
        <label for="due-date">Due Date</label>
        <input type="date" name="" id="due-date">
        <label for="high-priority">High Priority</label>
        <input type="checkbox" id="high-priority" name="priority" value="high-priority">
        <button id="add-task-button">Add Task</button>
      </form>`;
    const addTaskButton = document.querySelector('#add-task-button');
    addTaskButton.addEventListener('click', (e) => {
      e.preventDefault();
      addTask();
      createNewTaskPrompt();
    });
  });
}

// const createNewTaskPrompt = () => {

// };

const ui = {
  buildSideBar, buildTaskPage, addTask, createNewProjectPrompt, createNewTaskPrompt,
};

export default ui;
