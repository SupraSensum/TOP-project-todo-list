import loadHomePage from "./home-page.js";
import "./styles.css";

const homeButton = document.getElementById("homeButton");

loadHomePage();
homeButton.addEventListener("click", () => loadHomePage());
