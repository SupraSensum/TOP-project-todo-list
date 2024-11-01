export default class BlurLayer {
   constructor() {
      
   }
   
   static create(zIndex = 9998, id = "overlay") {
      if (!document.getElementById(id)) {
         // Create the element
         const overlay = document.createElement('div');
      
         // Add styles to make it span the entire viewport and blur the background
         overlay.id = id;
         overlay.style.position = 'fixed';
         overlay.style.top = '0';
         overlay.style.left = '0';
         overlay.style.width = '100vw';
         overlay.style.height = '100vh';
         overlay.style.backdropFilter = 'blur(4px)'; // Adjust the blur intensity as needed
         overlay.style.zIndex = `${zIndex}`; // Ensures it stays on top of other elements
      
         // Append it to the body
         document.body.appendChild(overlay);
      
      } else {
         console.log('blur layer already exists');
      }
   }

   static remove(id = "overlay") {
      const overlay = document.getElementById(id);
      if (overlay) {
         overlay.remove();
      } else {
         console.log('blur layer does not exist');
      }
   }
}
