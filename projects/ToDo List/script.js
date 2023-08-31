let input = document.getElementById("in");
let submit = document.getElementById("submit");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn"); // Changed the ID

let myTask = [];

submit.addEventListener("click", () => {
  myTask.push(input.value);
  localStorage.setItem("task", JSON.stringify(myTask));
  input.value = "";
  render(myTask);
});

let TaskFromLocalStorage = JSON.parse(localStorage.getItem("task"));

if (TaskFromLocalStorage) {
  myTask = TaskFromLocalStorage;
  render(myTask);
}

function render(myTask) {
  let listItems = "";
  for (let i = 0; i < myTask.length; i++) {
    listItems += `
      <li>
        ${myTask[i]}
        <button class="delete-task-btn">Delete Task</button>
      </li>`;
  }
  ulEl.innerHTML = listItems;

  const deleteTaskButtons = document.querySelectorAll(".delete-task-btn");
  deleteTaskButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      myTask.splice(index, 1);
      localStorage.setItem("task", JSON.stringify(myTask));
      render(myTask);
    });
  });
}

deleteBtn.addEventListener("click", function () {
  localStorage.removeItem("task"); // Changed to removeItem
  myTask = [];
  render(myTask);
});
