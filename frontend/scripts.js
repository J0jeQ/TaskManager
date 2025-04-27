
window.onload = async function() {
    const alltasks = document.getElementById("all-tasks-list");
    const completed = document.getElementById("completed-tasks-list");
    const uncompleted = document.getElementById("uncompleted-tasks-list");

    document.getElementById("add").addEventListener('click', () => {
        const addValue = document.getElementById("new-task").value;
        if (addValue.trim() !== "") {
            addTask(addValue);
            document.getElementById("new-task").value = "";
        }
    });

    reloadTasks();

    async function reloadTasks() {
        const tasks = await loadTask();
        alltasks.innerHTML = "";
        completed.innerHTML = "";
        uncompleted.innerHTML = "";
        tasks.forEach(task => {
            loadall(task);
            loadcompleted(task);
            loaduncompleted(task);
        });
    }

    function loadall(task) {
        renderTask(task, "all-tasks-list");
    }

    function loadcompleted(task) {
        if (task.done === true) {
        renderTask(task,"completed-tasks-list");
        }
    }

    function loaduncompleted(task) {
        if (task.done === false) {
            renderTask(task, "uncompleted-tasks-list");
        }
    }

    function renderTask(task, tasktype) {
        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.justifyContent = "space-evenly";
        li.style.marginBottom = "10px";
        li.id = task._id;
        li.style.opacity = 0;
        li.style.transform = "translateY(-10px)";
        li.style.transition = "opacity 0.5s ease, transform 0.5s ease";

        const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔️";
    completeBtn.style.marginRight = "10px";
    completeBtn.classList.add("complete-button");

    
    if (task.done) {
        completeBtn.style.display = "none";  
    } else {
        completeBtn.onclick = () => completeTask(task._id); 
    }

        const taskText = document.createElement("span");
        taskText.textContent = task.name;

        const taskDate = document.createElement("span");
        taskDate.textContent = formatDate(task.date);
        taskDate.style.margin = "0 10px";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.onclick = () => deleteTask(task._id);
        deleteBtn.classList.add("delete-button");

        li.appendChild(completeBtn);
        li.appendChild(taskText);
        li.appendChild(taskDate);
        li.appendChild(deleteBtn);

        document.getElementById(tasktype).appendChild(li);

        animateIn(li);
    }

    function animateIn(element) {
        requestAnimationFrame(() => {
            element.style.opacity = 1;
            element.style.transform = "translateY(0)";
        });
    }

    function formatDate(isoDate) {
        const [year, month, day] = isoDate.split("T")[0].split("-");
        return `${day}.${month}.${year.slice(2)}r`;
    }

    async function loadTask() {
        const response = await fetch("http://localhost:3000/api/tasks");
        return response.json();
    }

    async function addTask(taskName) {
        fetch('http://localhost:3000/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: taskName,
                done: false
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Błąd podczas dodawania zadania');
            }
            reloadTasks();
        })
        .catch(error => {
            console.error('Błąd:', error);
        });
    }

    async function deleteTask(id) {
        fetch(`http://localhost:3000/api/tasks/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Błąd podczas usuwania zadania');
            }
            reloadTasks();
        })
        .catch(error => {
            console.error('Błąd:', error);
        });
    }

    function completeTask(id) {
        fetch(`http://localhost:3000/api/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ done: true }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Błąd podczas aktualizacji statusu zadania');
            }
            reloadTasks();
        })
        .catch(error => {
            console.error('Błąd:', error);
        });
    }
};