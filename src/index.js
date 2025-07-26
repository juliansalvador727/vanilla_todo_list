// index.js
import "./styles/styles.css";
import createItem from "./modules/toDoItem";
import createProject from "./modules/toDoProject";

console.log("hello list");
const newItem = createItem({
  title: "fortnite",
  description: "awesome",
  dueDate: "tomorrow",
  priority: "high",
  notes: "okay so notes",
  checked: true,
});

console.log(newItem.getInfo());

const newProject = createProject({ title: "test-project" });

newProject.addItem(newItem);

console.log(newProject.getProjectInfo());
