import TaskHandler from "./backend_modules/task-handler.js";
import loadHomePage from "./frontend_modules/home-page.js";
import viewAllProjects from "./frontend_modules/view-all-projects.js";
import createNewTask from "./frontend_modules/create-new-task.js";
import "./styles.css";

const DEBUG = true;
const taskHandler = new TaskHandler();
const homeButton = document.getElementById('homeButton');
const viewAllProjectsButton = document.getElementById('viewAllProjectsButton');
const createNewTaskButton = document.getElementById('addTaskButton');

homeButton.addEventListener('click', () => loadHomePage());
createNewTaskButton.addEventListener('click', () => createNewTask());
viewAllProjectsButton.addEventListener('click', () => viewAllProjects());

loadHomePage();

if (DEBUG) {
   window.taskHandler = taskHandler;
}