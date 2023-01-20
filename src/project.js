const Project = (title) => {
  const taskList = [];
  const getTaskList = () => taskList;

  let displayed = false;
  const getDisplayed = () => displayed;
  const isDisplayed = (trueFalse) => {
    displayed = trueFalse;
  };
  const getTitle = () => title;

  const addTask = (task) => {
    taskList.push(task);
  };

  return {
    getTitle, addTask, getTaskList, isDisplayed, getDisplayed,
  };
};

export default Project;
