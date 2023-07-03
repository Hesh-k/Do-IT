function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
  
    // Create a new list item
    var newTask = document.createElement('li');
    newTask.textContent = taskInput.value;
  
    // Add the new task to the task list
    taskList.appendChild(newTask);
  
    // Clear the input field
    taskInput.value = '';
  }
  