const list = [];

const getList = () => list;

const addToList = (project) => {
  list.push(project);
};

const deleteProject = (index) => {
  list.splice(index, 1);
};

const getSpecificProject = (index) => list[index];

const projectList = {
  getList, addToList, deleteProject, getSpecificProject,
};

export default projectList;
