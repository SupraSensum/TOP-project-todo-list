import TaskHandler from "./task-handler.js";
import "./styles.css";

const DEBUG = true;
const taskHandler = new TaskHandler();

if (DEBUG) {
   window.taskHandler = taskHandler;
}