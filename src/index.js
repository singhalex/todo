import './style.css';
import { formatDistance, subDays } from 'date-fns';
import Task from './task';
import Project from './project';

const firstProject = Project('Main');
const firstTask = Task('Clean room', 'Make sure to clean the walls', 'tomorrow', 'High');

firstProject.addTask(firstTask);

console.log(firstProject);
console.log(firstProject.returnTaskList());
console.log(firstTask.returnPriority());
