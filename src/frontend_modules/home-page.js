import sidebar from "./sidebar.js";
import header from "./header.js";
import footer from "./footer.js";

import "../content.css";

export default function() {
   const contentBox = document.getElementById("content");

   contentBox.textContent = 'homepage';

   header();
   
   footer();
   
   sidebar();

   console.log('homepage');
}