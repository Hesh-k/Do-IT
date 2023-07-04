function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');

  // Create a new task item container
  var newTask = document.createElement('div');
  newTask.classList.add('task-item');

  var itemText = document.createElement("span");
  itemText.textContent = taskInput.value;

  var deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "";
  deleteButton.addEventListener("click", function() {
    newTask.remove();
  });

  // Append the item text and delete button to the task item container
  newTask.appendChild(itemText);
  newTask.appendChild(deleteButton);

  // Append the new task to the task list
  taskList.appendChild(newTask);

  // Clear the input field
  taskInput.value = '';
}

  

