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
const newItem2 = createItem({
  title: "This is the title2",
  description: "This is the description2",
  dueDate: "This is the duedate2",
  priority: "high2",
  notes: "okay so notes2",
  checked: false,
});

const newProject = createProject({ title: "test-project" });
const newProject2 = createProject({ title: "test-project2" });

newProject.addItem(newItem);
newProject2.addItem(newItem2);

console.log(newProject.getProjectInfo());

projectManager.addProject(newProject);
projectManager.addProject(newProject2);

displayProjects();
displayItems(newProject);
