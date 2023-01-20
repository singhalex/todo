const projectList = [];

const addToProjectList = (project) => {
  projectList.push(project);
};

function deleteProject(index) {
  projectList.splice(index, 1);
}

// Populate the task area with a project's task list
const taskArea = document.querySelector('#content-area');
function buildTaskPage(index) {
  // Clear task area
  taskArea.innerHTML = '';

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
    });

    // Add a delete button and rebuild sidebar
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    projectCard.appendChild(deleteButton);
    deleteButton.addEventListener('click', (event) => {
      event.stopPropagation();
      deleteProject(projectCard.dataset.index);
      buildSideBar();
    });

    sideBar.appendChild(projectCard);
    counter += 1;
  });
};

const ui = { addToProjectList, buildSideBar };

export default ui;
