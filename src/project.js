const Project = (title) => {
  const returnTitle = () => title;
  const taskList = [];
  const returnTaskList = () => taskList;

  const addTask = (task) => {
    taskList.push(task);
  };

  return { returnTitle, addTask, returnTaskList };
};

export default Project;
