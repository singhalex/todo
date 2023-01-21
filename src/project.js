const Project = (title) => {
  const taskList = [];
  const getTaskList = () => taskList;

  let displayed = false;
  const getDisplayed = () => displayed;
  const setDisplayed = (trueFalse) => {
    displayed = trueFalse;
  };
  const getTitle = () => title;

  const addTask = (task) => {
    taskList.push(task);
  };

  return {
    getTitle, addTask, getTaskList, setDisplayed, getDisplayed,
  };
};

export default Project;
