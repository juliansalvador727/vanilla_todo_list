// index.js

//logic
import createItem from "./modules/toDoItem";
import createProject from "./modules/toDoProject";
import projectManager from "./modules/projectManager";

//ui elements
import displayItems from "./ui/displayItems";
import displayProjects from "./ui/displayProjects";
import "./styles/styles.css";

console.log("hello list");
const newItem = createItem({
  title: "This is the title",
  description: "This is the description",
  dueDate: "This is the duedate",
  priority: "high",
  notes: "okay so notes",
  checked: true,
});

const newProject = createProject({ title: "test-project" });
newProject.addItem(newItem);

console.log(newProject.getProjectInfo());

projectManager.addProject(newProject);

displayProjects();
displayItems(newProject);
