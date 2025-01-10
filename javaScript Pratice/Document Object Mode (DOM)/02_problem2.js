// 1
let container = document.querySelector("#container");
console.log(container);
// 2
let text = document.querySelectorAll('.text');
console.log(text);
// 3
let button = document.querySelector("button");
button.innerText ="Hover to see me!";
// 4
let unorderedList = document.querySelector("#unorderedList");
console.log(`Before append new elements: ${unorderedList.innerText}`);
let newItem = document.createElement("li");
newItem.innerText ="Samsung s23 pro";
unorderedList.append(newItem);
console.log(`After append new elements: ${unorderedList.innerText}`);
if (unorderedList.hasChildNodes()) {
    unorderedList.removeChild(unorderedList.children[1]);
  }

// 5
let heading1 = document.querySelector(".heading1");
heading1.innerText ="Hello world";
console.log(heading1);
// 6
let box = document.querySelector(".box");
box.style.backgroundColor ="green";

let newButton = document.createElement("button");
newButton.innerText ="Click me";
box.append(newButton);

// To do task chellange
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
  deleteBtn.style.marginLeft = "10px";

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
