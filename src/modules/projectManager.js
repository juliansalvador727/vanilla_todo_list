// projectManager.js
import createProject from "./toDoProject";

const projectManager = (() => {
  const projectList = [];

  const addProject = (projectOrTitle) => {
    const project =
      typeof projectOrTitle === "string"
        ? createProject({ title: projectOrTitle })
        : projectOrTitle;

    projectList.push(project);
    return project;
  };

  const removeProject = (index) => {
    if (index >= 0 && index < projectList.length) {
      const project = projectList[index];
      const { items } = project.getProjectInfo();

      while (items.length > 0) {
        project.removeItem(0);
      }

      projectList.splice(index, 1);
    }
  };

  const getAllProjects = () => projectList;

  const getProject = (index) => projectList[index];

  return {
    addProject,
    removeProject,
    getAllProjects,
    getProject,
  };
})();

export default projectManager;
