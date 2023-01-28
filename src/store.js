function saveLocal(projectList) {
  localStorage.setItem('projectLength', projectList.getList().length);
  let projectCounter = 0;

  projectList.getList().forEach((project) => {
    localStorage.setItem(`projectTitle${projectCounter}`, projectList.getList()[projectCounter].getTitle());
    localStorage.setItem(`projectTasks${projectCounter}`, project.getTaskList().length);
    let taskCounter = 0;

    project.getTaskList().forEach((task) => {
      localStorage.setItem(`title${projectCounter}${taskCounter}`, task.getTitle());
      localStorage.setItem(`description${projectCounter}${taskCounter}`, task.getDescription());
      localStorage.setItem(`dueDate${projectCounter}${taskCounter}`, task.getDueDate());
      localStorage.setItem(`priority${projectCounter}${taskCounter}`, task.getPriority());

      taskCounter += 1;
    });
    projectCounter += 1;
  });
}

function loadLocal(Project, Task, projectList) {
  const projectNos = Number(localStorage.getItem('projectLength'));
  for (let projectCounter = 0; projectCounter < projectNos; projectCounter += 1) {
    const taskNos = Number(localStorage.getItem(`projectTasks${projectCounter}`));

    if (projectCounter > 0) {
      const newProject = Project(localStorage.getItem(`projectTitle${projectCounter}`), false);
      projectList.addToList(newProject);
    }

    for (let n = 0; n < taskNos; n += 1) {
      const retrievedTask = Task(
        localStorage.getItem(`title${projectCounter}${n}`),
        localStorage.getItem(`description${projectCounter}${n}`),
        localStorage.getItem(`dueDate${projectCounter}${n}`),
        localStorage.getItem(`priority${projectCounter}${n}`) === 'true',
      );
      projectList.getList()[projectCounter].addTask(retrievedTask);
    }
  }
}

const store = { saveLocal, loadLocal };

export default store;
