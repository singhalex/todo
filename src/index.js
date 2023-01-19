import './style.css';
import { formatDistance, subDays } from 'date-fns';
import Task from './task';
import Project from './project';
import ui from './ui';

const newProjectButton = document.querySelector('#new-project');
newProjectButton.addEventListener('click', () => {
  const newProject = Project(document.querySelector('#project-name').value);
  ui.addToProjectList(newProject);
  ui.buildSideBar();
  document.querySelector('#project-name').value = '';
  console.log(ui.getProjectList());
});
