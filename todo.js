let get = document.getElementById('text1');
let taskNumber = 1;
let save = document.getElementsByClassName("adding-task")[0];

document.getElementById('btn-id').addEventListener("click", () => {
    let task = get.value;
    if (taskNumber <= 10) {
        if (task == "") {
            console.log("Empty Value Cannot Be Added !");
            alert("Empty Value Cannot Be Added !");
        } else if (task.trim() !== "") {
            let taskContainer = document.createElement("div");
            taskContainer.classList.add("task-container");
            taskContainer.textContent=taskNumber +". "+ task;


           /* let newTask = document.createElement("div");
            newTask.classList.add("task-text");
            newTask.textContent = taskNumber + ". " + task;*/

            let removeButton = document.createElement("button");
            removeButton.classList.add("remove-btn");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", () => {
                taskContainer.remove();
            });
            taskContainer.appendChild(removeButton);
            save.appendChild(taskContainer);

            get.value = "";
            taskNumber++;
        } else {
            alert("Wrong Input");
        }
    } else {
        alert("Only up to 10 Tasks Can Be Added To List");
    }
});

// Keypress event listener for Enter key
get.addEventListener('keypress', function(event) {
    // Check if Enter key is pressed (keyCode 13 or 'Enter')
    if (event.key === 'Enter') {
        let task = get.value;
        if (taskNumber <= 10) {
            if (task == "") {
                console.log("Empty Value Cannot Be Added !");
                alert("Empty Value Cannot Be Added !");
            } else if (task.trim() !== "") {
                let taskContainer = document.createElement("div");
                taskContainer.classList.add("task-container");
                taskContainer.textContent=taskNumber +". "+ task;

                /*let newTask = document.createElement("p");
                newTask.classList.add("task-text");
                newTask.textContent = taskNumber + ". " + task;*/

                let removeButton = document.createElement("button");
                removeButton.classList.add("remove-btn");
                removeButton.textContent = "Remove";
                removeButton.addEventListener("click", () => {
                    taskContainer.remove();
                    taskNumber--;
                });

                taskContainer.appendChild(removeButton);
                save.appendChild(taskContainer);

                get.value = "";
                taskNumber++;
            } else {
                alert("Wrong Input");
            }
        } else {
            alert("Only up to 10 Tasks Can Be Added To List");
        }
    }
});
