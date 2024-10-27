import StorageHandler from "./storage-handler.js";
import "./styles.css";

const DEBUG = true;
const storageHandler = new StorageHandler();

if (DEBUG) {
   window.StorageHandler = StorageHandler;
   window.storageHandler = storageHandler;
}