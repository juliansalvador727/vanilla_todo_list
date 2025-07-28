// displayProjects.js
import projectManager from "../modules/projectManager.js";
import displayItems from "./displayItems.js";

const displayProjects = () => {
  const container = document.querySelector("#project-preview");
  container.innerHTML = "";

  // get projects from project manager;
  const projects = projectManager.getAllProjects();

  projects.forEach((project, index) => {
    const { title } = project.getProjectInfo();

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const titleElem = document.createElement("span");
    titleElem.textContent = title;

    const viewButton = document.createElement("button");
    viewButton.textContent = "view";
    viewButton.addEventListener("click", () => {
      console.log(`Viewing project: ${title}`);
      displayItems(project);
    });

    const removeProject = document.createElement("button");
    removeProject.textContent = "❌";
    removeProject.addEventListener("click", () => {
      console.log(`Deleting Project: ${title}`);
      console.log(`Deleting ${title}'s Items`);

      projectManager.removeProject(index);

      displayProjects();
      const remainingProjects = projectManager.getAllProjects();
      if (remainingProjects.length > 0) {
        displayItems(remainingProjects[0]);
      } else {
        container.innerHTML = "";
        document.querySelector("#item-preview").innerHTML = "";
      }
    });

    projectDiv.appendChild(titleElem);
    projectDiv.appendChild(viewButton);
    projectDiv.appendChild(removeProject);
    container.appendChild(projectDiv);
  });
};

export default displayProjects;
