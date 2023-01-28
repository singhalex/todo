import './style.css';
import Task from './task';
import Project from './project';
import ui from './ui';
import projectList from './project-list';
import store from './store';

// Create Inbox
const inbox = Project('Inbox', true);
projectList.addToList(inbox);

// Initialize page
store.loadLocal(Project, Task, projectList);
ui.createNewProjectPrompt();
ui.createNewTaskPrompt();
ui.buildTaskPage(0);
ui.buildSideBar();
