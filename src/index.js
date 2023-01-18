import './style.css';
import { formatDistance, subDays } from 'date-fns';

const Task = (title, description, dueDate, priority) => {
  const returnTitle = () => title;
  const returnDescription = () => description;
  const returnDueDate = () => dueDate;
  const returnPriority = () => priority;

  return {
    returnTitle, returnDescription, returnDueDate, returnPriority,
  };
};

const Project = (title) => {
  const returnTitle = () => title;
  const taskList = [];
  const returnTaskList = () => taskList;

  const addTask = (task) => {
    taskList.push(task);
  };

  return { returnTitle, addTask, returnTaskList };
};

const firstProject = Project('Main');
const firstTask = Task('Clean room', 'Make sure to clean the walls', 'tomorrow', 'High');

firstProject.addTask(firstTask);

console.log(firstProject);
console.log(firstProject.returnTaskList());
console.log(firstTask.returnPriority());
