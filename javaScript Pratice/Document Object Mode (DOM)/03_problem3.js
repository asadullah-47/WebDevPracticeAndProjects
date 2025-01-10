// Step 1: Accessing DOM elements
const taskInput = document.getElementById("taskInput"); // Input field
const addTaskBtn = document.getElementById("addTaskBtn"); // Add task button
const taskList = document.getElementById("taskList"); // Task list container

// Step 2: Adding event listener to the button
addTaskBtn.addEventListener("click", () => {
  // Step 3: Get the task from the input field
  const taskValue = taskInput.value.trim(); // Remove extra spaces

  // Step 4: Validate input
  if (taskValue === "") {
    alert("Please enter a task.");
    return;
  }

  // Step 5: Create a new <li> element
  const taskItem = document.createElement("li");

  // Add task text to the <li>
  taskItem.innerText = taskValue;

  // Step 6: Create a delete button for each task
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.style.marginLeft = "20px";
  deleteBtn.style.padding = "3px";
deleteBtn.style.borderRadius ="4px"
  // Add event listener to delete the task
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(taskItem); // Remove the <li> from the list
  });

  // Append the delete button to the <li>
  taskItem.appendChild(deleteBtn);

  // Step 7: Append the <li> to the task list
  taskList.appendChild(taskItem);

  // Step 8: Clear the input field
  taskInput.value = "";
});
