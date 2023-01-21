import Task from './task';
import Project from './project';

const projectList = [];

const addToProjectList = (project) => {
  projectList.push(project);
};

function deleteProject(index) {
  projectList.splice(index, 1);
}

// Populate the task area with a project's task list
const taskArea = document.querySelector('#content-area');
function clearTaskArea() {
  taskArea.innerHTML = '';
}
function buildTaskPage(index) {
  clearTaskArea();

  // Loop through task list to build cards
  projectList[index].getTaskList().forEach((task) => {
    const taskCard = document.createElement('div');
    taskCard.setAttribute('class', 'card');
    taskCard.innerText = task.getTitle();
    taskArea.appendChild(taskCard);
  });
}

const sideBar = document.querySelector('#project-container');
const buildSideBar = () => {
  // Clear out the sidebar
  sideBar.innerHTML = '';

  // Create a card for each project in the array
  let counter = 0;
  projectList.forEach((project) => {
    const projectCard = document.createElement('div');
    projectCard.id = 'project-card';
    projectCard.dataset.index = counter;
    projectCard.innerText = project.getTitle();

    projectCard.addEventListener('click', () => {
      buildTaskPage(projectCard.dataset.index);
      projectList.forEach((item) => {
        item.setDisplayed(false);
      });
      project.setDisplayed(true);
    });

    // Add a delete button and rebuild sidebar
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    projectCard.appendChild(deleteButton);
    deleteButton.addEventListener('click', (event) => {
      event.stopPropagation();
      if (projectList[projectCard.dataset.index].getDisplayed() === true) {
        clearTaskArea();
      }
      deleteProject(projectCard.dataset.index);
      buildSideBar();
    });

    sideBar.appendChild(projectCard);
    counter += 1;
  });
};

// Adds a task to the displayed project and displays it in the task area
const addTask = () => {
  let indexCounter = 0;
  projectList.forEach((project) => {
    if (project.getDisplayed() === true) {
      const newTask = Task(document.querySelector('#task-input').value, 'test', 'more test', false);
      project.addTask(newTask);
      console.log(projectList[indexCounter].getTitle());
      console.log(projectList);
      buildTaskPage(indexCounter);
      document.querySelector('#task-input').value = '';
    }
    indexCounter += 1;
  });
};

function createNewProjectPrompt() {
  const projectPrompt = document.querySelector('#create-project-prompt');
  projectPrompt.innerHTML = '<button id="test1">+ New Project</button>';
  const newProjectPromptButton = document.querySelector('#test1');
  newProjectPromptButton.addEventListener('click', (e) => {
    e.preventDefault();
    projectPrompt.innerHTML = '<input type="text" id="project-name" /><br><button id="add">Add</button><button id="cancel">Cancel</button>';
    const addButton = document.querySelector('#add');
    const projectNameInput = document.querySelector('#project-name');
    addButton.addEventListener('click', () => {
      e.preventDefault();
      const newProject = Project(projectNameInput.value);
      addToProjectList(newProject);
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

const ui = {
  addToProjectList, buildSideBar, addTask, createNewProjectPrompt,
};

export default ui;
