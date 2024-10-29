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

   #checkIfTaskAlreadyExists(uid) {
      const taskAlreadyExists = TaskHandler.tasks[uid];
      if (taskAlreadyExists) {
         return taskAlreadyExists;
      } else {
         return false;
      }
   }

   createTask({
      title = '',
      description = '',
      dueDate = '',
      priority = null,
      notes = '',
      projects = [],
      completed = false,
   }) {
      const task = {
         title,
         description,
         dueDate,
         priority,
         notes,
         projects,
         completed,
      };
      const uid = this.#createTaskUID(dueDate);

      if (this.#checkIfTaskAlreadyExists(uid)) {
         alert(`Task UID: ${uid} already exists. Task was not created.`);
         console.error(`Task UID: ${uid} already exists.`);
         console.error(taskAlreadyExists);
      } else {
         this.#addTaskToStorage(uid, task);
      }
   }

   getTask(uid) {
      return TaskHandler.tasks[uid];
   }

   // update
   updateTask(uid, task) {
      if (this.#checkIfTaskAlreadyExists(uid)) {
         this.#addTaskToStorage(uid, task);
      } else {
         alert(`Task UID: ${uid} does not exist. Task was not updated.`);
         console.error(`Task UID: ${uid} does not exist.`);
         console.error(task);
      }
   }

   // delete
}