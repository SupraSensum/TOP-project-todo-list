import TaskHandler from "../backend_modules/task-handler.js";

export function createTaskList() {
   const taskList = document.createElement('ul');
   taskList.id = "taskList";

   return taskList;
}

function createTaskElement(task) {
   const taskElement = document.createElement('li');
   taskElement.innerHTML = task.title;

   return taskElement;
}

export function updateTaskList() {
   const tasks = TaskHandler.tasks;

   const taskList = document.getElementById('taskList');
   taskList.innerHTML = '';

   for (const uid in tasks) {
      const task = tasks[uid];
      taskList.appendChild(createTaskElement(task));
   }
}