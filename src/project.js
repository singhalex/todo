const Project = (title) => {
  const taskList = [];
  const getTaskList = () => taskList;

  let displayed = false;
  const getDisplayed = () => displayed;
  const setDisplayed = (boolean) => {
    displayed = boolean;
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
