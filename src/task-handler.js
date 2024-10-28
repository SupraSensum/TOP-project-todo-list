import { el } from "date-fns/locale";
import StorageHandler from "./storage-handler.js";

const localStorageHandler = new StorageHandler();

export default class TaskHandler {
   constructor() {

   }

   static #tasks = {};

   static get tasks() {
      return TaskHandler.#tasks;
   }

   #createTaskUID(dueDate) {
      const currentDateTime = new Date().toISOString().replace(/[^\w]/gi, '');
      return `${currentDateTime}-${dueDate.replace(/[^\w]/gi, '')}`;
   }

   #addTaskToStorage(uid, task) {
      TaskHandler.#tasks[uid] = task;

      if (StorageHandler.localStorageAvailable) {
         localStorageHandler.updateTasks(TaskHandler.tasks);
      }
   }

   createTask({
      title = '',
      description = '',
      dueDate = '',
      priority = null,
      notes = '',
      projects = [],
      subtasks = {},
      completed = false,
   }) {
      const uid = this.#createTaskUID(dueDate);
      const task = {
         title,
         description,
         dueDate,
         priority,
         notes,
         projects,
         subtasks,
         completed,
      };

      const taskAlreadyExists = TaskHandler.tasks[uid];
      if (taskAlreadyExists) {
         alert(`Task UID: ${uid} already exists. Task was not created.`);
         console.error(`Task UID: ${uid} already exists.`);
         console.error(taskAlreadyExists);
         return;
      } else {
         this.#addTaskToStorage(uid, task);
      }
   }

   getTask(uid) {
      return TaskHandler.tasks[uid];
   }

   // update
   updateTask(uid) {

   }

   // delete
}