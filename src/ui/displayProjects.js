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
    viewButton.addEventListener("click", (e) => {
      console.log(`Viewing project: ${title}`);
      displayItems(project);
    });

    projectDiv.appendChild(titleElem);
    projectDiv.appendChild(viewButton);
    container.appendChild(projectDiv);
  });
};

export default displayProjects;
