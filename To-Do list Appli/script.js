let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    tasks.push({ text: taskText, completed: false });
    displayTasks();
    taskInput.value = '';
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.textContent = task.text;
    taskItem.className = task.completed ? 'completed' : '';
    taskItem.addEventListener('click', () => toggleTask(index));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', (event) => {
      event.stopPropagation();
      deleteTask(index);
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  });
}
