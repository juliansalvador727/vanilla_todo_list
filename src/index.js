// index.js
import "./styles/styles.css";
import createItem from "./modules/toDoItem";
import createProject from "./modules/toDoProject";
import displayItems from "./modules/ui";

console.log("hello list");
const newItem = createItem({
  title: "This is the title",
  description: "This is the description",
  dueDate: "This is the duedate",
  priority: "high",
  notes: "okay so notes",
  checked: true,
});

console.log(newItem.getInfo());

const newProject = createProject({ title: "test-project" });

newProject.addItem(newItem);

console.log(newProject.getProjectInfo());

displayItems(newProject);
