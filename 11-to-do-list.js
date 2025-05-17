const toDoList = JSON.parse(localStorage.getItem("toDoList")) || [
  {
    taskName: "",
    dueDate: "",
  },
];
display();

function addTask() {
  const Task = document.querySelector(".js-input");
  taskName = Task.value;
  const Date = document.querySelector(".js-date");
  dueDate = Date.value;
  if (Task.value === "" || Date.value === "") {
    alert("your task or date cannot be empty");
  } else {
    toDoList.push({ taskName, dueDate });
    display();
    Task.value = "";
    Date.value = "";
  }
  saveToStorage();
}

function display() {
  let displayHtml = " ";
  for (let i = 1; i < toDoList.length; i++) {
    const { taskName, dueDate } = toDoList[i];
    let html = `
    <div>${taskName}</div> 
    <div>${dueDate}</div> 
    <button class="css-delete" onclick="
        toDoList.splice(${i},1);
        display();
        saveToStorage();
    ">Delete</button>
    `;
    displayHtml += html;
  }
  document.querySelector(".js-output").innerHTML = displayHtml;
}

function keyTake(event) {
  if (event.key === "Enter") {
    addTask();
  }
}

function saveToStorage() {
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
}
