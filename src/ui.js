const sideBar = document.querySelector('#project-container');
const projectList = [];

const addToProjectList = (project) => {
  projectList.push(project);
};

function deleteProject(index) {
  projectList.splice(index, 1);
}

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

    // Delete the card when clicked and rebuild the sidebar
    projectCard.addEventListener('click', () => {
      deleteProject(projectCard.dataset.index);
      buildSideBar();
    });

    sideBar.appendChild(projectCard);
    counter += 1;
  });
};

const getProjectList = () => projectList;

const ui = { addToProjectList, buildSideBar, getProjectList };

export default ui;
