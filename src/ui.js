import Task from './task';
import Project from './project';
import projectList from './projectlist';

// Populate the task area with a project's task list
const taskArea = document.querySelector('#task-area');
function clearTaskArea() {
  taskArea.innerHTML = '';
}

function buildTaskPage(index) {
  clearTaskArea();

  // Displays the currently selected project title
  const projectTitle = document.createElement('H3');
  projectTitle.innerText = projectList.getList()[index].getTitle();
  projectTitle.setAttribute('id', 'project-title');
  taskArea.appendChild(projectTitle);

  // Loop through task list to build cards
  let indexCounter = 0;
  projectList.getList()[index].getTaskList().forEach((task) => {
    const taskCard = document.createElement('div');
    taskCard.setAttribute('class', 'card');
    taskCard.dataset.index = indexCounter;
    taskCard.innerText = task.getTitle();

    const deleteTaskButton = document.createElement('button');
    deleteTaskButton.setAttribute('class', 'delete-task');
    deleteTaskButton.innerText = 'X';
    deleteTaskButton.addEventListener('click', (e) => {
      e.stopPropagation();
      projectList.getList()[index].deleteTaskFromList(taskCard.dataset.index);
      buildTaskPage(index);
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
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.setAttribute('class', 'delete-project-button');
    projectCard.appendChild(deleteButton);
    deleteButton.addEventListener('click', (event) => {
      event.stopPropagation();
      if (projectList.getList()[projectCard.dataset.index].getDisplayed() === true) {
        clearTaskArea();
      }
      projectList.deleteProject(projectCard.dataset.index);
      buildSideBar();
    });

    sideBar.appendChild(projectCard);
    counter += 1;
  });
};

// Adds a task to the displayed project and displays it in the task area
const addTask = () => {
  let indexCounter = 0;
  projectList.getList().forEach((project) => {
    if (project.getDisplayed() === true) {
      const newTask = Task(document.querySelector('#task-input').value, 'test', 'more test', false);
      project.addTask(newTask);
      buildTaskPage(indexCounter);
      document.querySelector('#task-input').value = '';
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
    projectPrompt.innerHTML = '<input type="text" placeholder="Project Name" id="project-name" /><br><div id="button-container"><button id="add">Add</button><button id="cancel">Cancel</button></div>';
    const addButton = document.querySelector('#add');
    const projectNameInput = document.querySelector('#project-name');
    projectNameInput.focus();
    addButton.addEventListener('click', () => {
      e.preventDefault();
      const newProject = Project(projectNameInput.value);
      projectList.addToList(newProject);
      buildSideBar();
      createNewProjectPrompt();
    });
    const cancelButton = document.querySelector('#cancel');
    cancelButton.addEventListener('click', () => {
      e.preventDefault();
      createNewProjectPrompt();
    });
  });
}

// const createNewTaskPrompt = () => {

// };

const ui = {
  buildSideBar, addTask, createNewProjectPrompt,
};

export default ui;
