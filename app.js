let input = document.querySelector(".input");
let taskList = document.querySelector(".taskList");
let add = document.querySelector(".add");


function addTask() {
    if (input.value === "") {
        return;
    }
    const task = document.createElement("li");
    task.innerHTML = `
        <input type="checkbox" class="checkbox">
        <label>${input.value}</label>
        <button class="delete">🗑️</button>
    `
    const deleteButton = task.querySelector(".delete");
    deleteButton.addEventListener("click", function() {
        task.remove();
    })

    const checkbox = task.querySelector(".checkbox");
    checkbox.addEventListener("change", function(){
        if (checkbox.checked) {
            task.style.textDecoration = "line-through";
            task.style.color = "#999";
            taskList.append(task);
        } else {
            task.style.textDecoration = "none";
            task.style.color = "";
            taskList.prepend(task);
        }
    })




    taskList.appendChild(task);
    input.value = "";

}

add.addEventListener("click", addTask);

input.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
})
