import StyleVariables from "./style-variables.js";
import createNewTask from "./create-new-task.js";

export default function () {
   const sidebar = document.getElementById("sidebar");
   sidebar.style.backgroundColor = StyleVariables.celadon;
   
   sidebar.appendChild(createAddTaskButton());

   console.log('sidebar');
}

function createAddTaskButton() {
   const addTaskButton = document.createElement('button');
   addTaskButton.id = "addTaskButton";
   addTaskButton.textContent = 'Add Task';
   addTaskButton.addEventListener('click', () => createNewTask());

   return addTaskButton;
}