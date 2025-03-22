document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new list item
        const li = document.createElement("li");
        li.innerHTML = `${taskText} <button class="delete-btn">X</button>`;
        
        // Add delete functionality
        li.querySelector(".delete-btn").addEventListener("click", function () {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = "";
    });
});
