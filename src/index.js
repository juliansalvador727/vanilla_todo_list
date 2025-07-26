import "./styles/styles.css";
import createItem from "./modules/toDoItem";

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
