// displayItems.js
const displayItems = (project) => {
  const container = document.querySelector("#item-preview");
  container.innerHTML = "";

  //   const info = project.getProjectInfo();
  //   const items = info.items;
  const { items } = project.getProjectInfo();

  items.forEach((item, index) => {
    const { title, dueDate, checked } = item.getInfo();

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = checked;

    const titleElem = document.createElement("span");
    titleElem.textContent = title;

    const dueDateElem = document.createElement("span");
    dueDateElem.textContent = dueDate;

    const removeElem = document.createElement("button");
    removeElem.textContent = `Remove?`;
    removeElem.id = "remove-button";
    removeElem.addEventListener("click", (e) => {
      project.removeItem(index);
      displayItems(project);
    });

    itemDiv.appendChild(titleElem);
    itemDiv.appendChild(dueDateElem);
    itemDiv.appendChild(checkbox);
    itemDiv.appendChild(removeElem);

    container.appendChild(itemDiv);
  });
};

export default displayItems;
