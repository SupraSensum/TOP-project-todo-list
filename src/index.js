import TaskHandler from "./backend_modules/task-handler.js";
import loadHomePage from "./frontend_modules/home-page.js";
import "./styles.css";

const DEBUG = true;
const taskHandler = new TaskHandler();
const homeButton = document.getElementById('homeButton');

loadHomePage();

homeButton.addEventListener('click', () => loadHomePage());

if (DEBUG) {
   window.taskHandler = taskHandler;
}