// Function to save tasks to local storage
function saveTasksToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasksFromLocalStorage() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  return storedTasks;
}

export { saveTasksToLocalStorage, loadTasksFromLocalStorage };
