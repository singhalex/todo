import './style.css';
import { formatDistance, subDays } from 'date-fns';
import Task from './task';
import Project from './project';
import ui from './ui';

const addTaskButton = document.querySelector('#add-task-button');
addTaskButton.addEventListener('click', (e) => {
  e.preventDefault();
  ui.addTask();
});

// Initialize page
ui.createNewProjectPrompt();
ui.createNewTaskPrompt();
