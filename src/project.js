const Project = (title) => {
  const getTitle = () => title;
  const taskList = [];
  const getTaskList = () => taskList;

  const addTask = (task) => {
    taskList.push(task);
  };

  return { getTitle, addTask, getTaskList };
};

export default Project;
