function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');



 
  var newTask = document.createElement('div');
  newTask.classList.add('task-item');

  var itemText = document.createElement("span");
  itemText.textContent = taskInput.value;
  itemText.classList.add('item-text');


  var completedIcon = document.createElement("img");
  completedIcon.src = "assets/check.png"; 
  completedIcon.classList.add("completed-icon");

 
  newTask.addEventListener("click", function() {
    if (itemText.style.textDecoration === "line-through") {
      itemText.style.textDecoration = "none";
      completedIcon.style.display = "none";
    } else {
      itemText.style.textDecoration = "line-through";
      completedIcon.style.display = "inline";
    }
  });

  var deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", function(event) {
    var targetTask = event.target.closest('.task-item');
    targetTask.remove();
  });

 
  completedIcon.style.display = "none";

 
  newTask.appendChild(completedIcon);
  newTask.appendChild(itemText);
  newTask.appendChild(deleteButton);
  
  
  taskList.appendChild(newTask);

  taskInput.value = '';
}

