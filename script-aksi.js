var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder  = document.getElementById("completed-tasks");

var createNewTaskElement = function(taskString) {
  //Create List Item
  var listItem      = document.createElement("li");

  //input (checkbox)
  var checkBox      = document.createElement("input"); // checkbox
  //label
  var label         = document.createElement("label");
  //input (text)
  var editInput     = document.createElement("input"); // text
  //button.edit
  var editButton    = document.createElement("button");
  //button.delete
  var deleteButton  = document.createElement("button");
  
  //Elemetn type
  checkBox.type   = "checkbox";
  editInput.type  = "text";
  
  editButton.innerText   = "Edit";
  editButton.className   = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  
  label.innerText = taskString;
  
   //element appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

// Add a new task
var addTask = function() {
  console.log("Add task...");
  var listItem = createNewTaskElement(taskInput.value);
  bindTaskEvents(listItem, taskCompleted);  
  
  if(taskInput.value === ''){
    alert('Write something!');
    return false;
  }else{
    incompleteTasksHolder.appendChild(listItem);
  }

  taskInput.value = "";   
}

var editTask = function() {
  console.log("Edit Task...");
  
  var listItem = this.parentNode;
  
  var editInput = listItem.querySelector("input[type=text]")
  var label = listItem.querySelector("label");
  
  var containsClass = listItem.classList.contains("editMode");
  if(containsClass) {
    label.innerText = editInput.value;
  } else {
    editInput.value = label.innerText;
  }

  listItem.classList.toggle("editMode");
 
}

// Delete an existing task
var deleteTask = function() {
  console.log("Delete task...");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  ul.removeChild(listItem);
}

// Mark a task as complete 
var taskCompleted = function() {
  console.log("Task complete...");
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}

// Mark a task as incomplete
var taskIncomplete = function() {
  console.log("Task Incomplete...");
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events");
  var checkBox      = taskListItem.querySelector("input[type=checkbox]");
  var editButton    = taskListItem.querySelector("button.edit");
  var deleteButton  = taskListItem.querySelector("button.delete");
  
  editButton.onclick    = editTask;
  deleteButton.onclick  = deleteTask;
  checkBox.onchange     = checkBoxEventHandler;
}

addButton.addEventListener("click", addTask);

for(var i = 0; i <  incompleteTasksHolder.children.length; i++) {
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

for(var i = 0; i <  completedTasksHolder.children.length; i++) {
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete); 

}
