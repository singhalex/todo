import './style.css';
import { formatDistance, subDays } from 'date-fns';
import Task from './task';
import Project from './project';
import ui from './ui';
import projectList from './project-list';

// Create Inbox
const inbox = Project('Inbox');
projectList.addToList(inbox);
ui.buildSideBar();
ui.buildTaskPage(0);
projectList.getSpecificProject(0).setDisplayed(true);

// Initialize page
ui.createNewProjectPrompt();
ui.createNewTaskPrompt();
