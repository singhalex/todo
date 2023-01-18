const Task = (title, description, dueDate, priority) => {
  const returnTitle = () => title;
  const returnDescription = () => description;
  const returnDueDate = () => dueDate;
  const returnPriority = () => priority;

  return {
    returnTitle, returnDescription, returnDueDate, returnPriority,
  };
};

export default Task;
