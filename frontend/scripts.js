document.getElementById("load-tasks").addEventListener("click", async () => {
    const response = await fetch("http://localhost:3000/api/tasks");
    const tasks = await response.json();
    const tasksList = document.getElementById("tasks-list");

    tasksList.innerHTML = ""; 
    tasks.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.textContent = `${task.name} - ${task.done ? "Zrobione" : "Nie zrobione"}`;
        tasksList.appendChild(taskElement);
    });
});