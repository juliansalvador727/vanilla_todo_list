// toDoItem.js
const createItem = ({
  title,
  description,
  dueDate,
  priority,
  notes = "",
  checked = false,
}) => {
  let done = checked;

  const toggleDone = () => {
    done = !done;
  };

  const getInfo = () => ({
    title,
    description,
    dueDate,
    priority,
    notes,
    checked,
  });

  return { toggleDone, getInfo };
};

export default createItem;
