const Project = (title, displayed = false) => {
  const taskList = [];
  const getTaskList = () => taskList;

  let isDisplayed = displayed;
  const getDisplayed = () => isDisplayed;
  const setDisplayed = (boolean) => {
    isDisplayed = boolean;
  };
  const getTitle = () => title;

  const addTask = (task) => {
    taskList.push(task);
  };

  const deleteTaskFromList = (index) => {
    taskList.splice(index, 1);
  };

  return {
    getTitle, addTask, getTaskList, setDisplayed, getDisplayed, deleteTaskFromList,
  };
};

export default Project;
