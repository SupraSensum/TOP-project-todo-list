import loadHomePage from "./home-page.js";
import loadAboutPage from "./about-page.js";
import loadMenuPage from "./menu-page.js";
import "./styles.css";

const homeButton = document.getElementById("homeButton");
const aboutButton = document.getElementById("aboutButton");
const menuButton = document.getElementById("menuButton");

loadHomePage();

homeButton.addEventListener("click", () => loadHomePage());
aboutButton.addEventListener("click", () => loadAboutPage());
menuButton.addEventListener("click", () => loadMenuPage());