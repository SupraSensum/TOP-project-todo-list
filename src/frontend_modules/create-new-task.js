export default function () {
   if (!document.getElementById('newTaskBox')) {
      const newTaskBox = document.createElement('div');
      newTaskBox.id = "newTaskBox";
      newTaskBox.textContent = "create new task";
      newTaskBox.style.cssText = `
         width: 300px;
         height: 400px;
         background-color: #BCEBCB;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         position: fixed;
         box-shadow: 0 5px 10px 0 rgba(0,0,0,0.4);
         border-radius: 5px;
         border: 1px solid black;
      `;
   
      document.body.appendChild(newTaskBox);
   
      console.log('create new task');
   }
}