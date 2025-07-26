//toDoProject.js
const createProject = ({ title }) => {
  const items = [];

  const addItem = (item) => {
    items.push(item);
  };

  const removeItem = (index) => {
    if (index >= 0 && index < items.length) {
      items.splice(index, 1);
    }
  };

  const getItem = () => ({ items });

  const getProjectInfo = () => ({ title, items });

  return { addItem, getItem, getProjectInfo };
};

export default createProject;
