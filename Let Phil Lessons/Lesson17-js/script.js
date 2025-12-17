const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();
    if(taskText === "") return;

    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskItem.classList.add("task")

    // add a click event to remove task
    taskItem.addEventListener("click", function() {
        taskList.removeChild(taskItem);
    });
    taskList.appendChild(taskItem);

    taskInput.value = "";
}