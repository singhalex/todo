import './style.css';
import { formatDistance, subDays } from 'date-fns';
import Task from './task';
import Project from './project';
import ui from './ui';
import projectList from './project-list';

// Create Inbox
const inbox = Project('Inbox', true);
projectList.addToList(inbox);

// Initialize page
ui.buildSideBar();
ui.buildTaskPage(0);
ui.createNewProjectPrompt();
ui.createNewTaskPrompt();
