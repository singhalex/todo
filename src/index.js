import './style.css';
import { formatDistance, subDays } from 'date-fns';
import Task from './task';
import Project from './project';
import ui from './ui';

const newProjectButton = document.querySelector('#new-project');
const projectNameInput = document.querySelector('#project-name');
newProjectButton.addEventListener('click', () => {
  const newProject = Project(projectNameInput.value);

  // Placeholder task
  const newTask = Task('Clean', 'Everything clean', 'Today', false);
  const secondTask = Task('Wahat?', 'The?', 'Poop?', true);
  newProject.addTask(newTask);
  newProject.addTask(secondTask);

  ui.addToProjectList(newProject);
  ui.buildSideBar();
  projectNameInput.value = '';
});
