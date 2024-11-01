import BlurLayer from "./blur-layer.js";
import TaskHandler from "../backend_modules/task-handler";

export default function () {
   createNewTaskBox();
}

function createNewTaskBox() {
   if (!document.getElementById('newTaskBox')) {
      BlurLayer.create(9998, "overlay");
      const newTaskBox = document.createElement('div');
      newTaskBox.id = "newTaskBox";
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
         z-index: 9999;
         display: flex;
         flex-direction: column;
         align-items: center;
         gap: 10px;
         font-size: 16px;
         font-weight: 600;
         color: #333;
      `;

      const header = document.createElement('h2');
      header.textContent = 'Create New Task';
      header.style.cssText = `
         margin-top: 20px;
      `;

      document.addEventListener('keydown', handleEscapeKey);
      newTaskBox.appendChild(createCloseButton());
      newTaskBox.appendChild(header);
      newTaskBox.appendChild(createForm());
      document.body.appendChild(newTaskBox);
   } else {
      console.log('new task already exists');
   }
}

function handleEscapeKey(e) {
   if (e.key === 'Escape') {
      closeNewTaskBox();
   }
}

function createCloseButton() {
   const closeButton = document.createElement('button');
   closeButton.textContent = 'X';
   closeButton.style.cssText = `
      position: absolute;
      top: 2px;
      left: 5px;
      background-color: transparent;
      color: #333;
      border: none;
      padding: 10px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
   `;
   closeButton.onclick = closeNewTaskBox;
   return closeButton;
}

function createForm() {
   const taskHandler = new TaskHandler();
   const form = document.createElement('form');
   form.id = "newTaskForm";
   form.onsubmit = (e) => {
      e.preventDefault();
      const formData = Object.fromEntries(new FormData(form));
      const {
         title,
         description,
         dueDate,
         priority,
         notes,
         checklist,
         projects,
         completed,
      } = formData;

      taskHandler.createTask({
         title,
         description: description || '',
         dueDate,
         priority,
         notes: notes || '',
         checklist: checklist || '',
         projects: projects.split(','),
         completed,
      })

      form.reset();
      closeNewTaskBox();
   };
   form.style.cssText = `
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      gap: 10px;
      font-family: sans-serif;
      font-size: 16px;
      color: #333;
      overflow: auto;
      width: 100%;
   `;
   const titleInput = document.createElement('input');
   titleInput.type = 'text';
   titleInput.name = 'title';
   titleInput.placeholder = 'title';
   titleInput.required = true;
   titleInput.style.cssText = `
      width: 100%;
      height: 40px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
   `;

   const descriptionInput = document.createElement('textarea');
   descriptionInput.name = 'description';
   descriptionInput.placeholder = 'description';
   descriptionInput.style.cssText = `
      width: 100%;
      height: 100px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
   `;

   const dueDateInput = document.createElement('input');
   dueDateInput.type = 'date';
   dueDateInput.name = 'dueDate';
   dueDateInput.required = true;
   dueDateInput.style.cssText = `
      width: 100%;
      height: 40px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
   `;

   const priorityInput = document.createElement('input');
   priorityInput.type = 'number';
   priorityInput.name = 'priority';
   priorityInput.required = true;
   priorityInput.style.cssText = `
      width: 100%;
      height: 40px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
   `;

   const notesInput = document.createElement('textarea');
   notesInput.name = 'notes';
   notesInput.placeholder = 'notes';
   notesInput.style.cssText = `
      width: 100%;
      height: 100px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
   `;

   const checklistInput = document.createElement('textarea');
   checklistInput.name = 'checklist';
   checklistInput.placeholder = 'checklist';
   checklistInput.style.cssText = `
      width: 100%;
      height: 100px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
   `;

   const projectsInput = document.createElement('input');
   projectsInput.type = 'text';
   projectsInput.name = 'projects';
   projectsInput.placeholder = 'projects';
   projectsInput.required = true;
   projectsInput.style.cssText = `
      width: 100%;
      height: 40px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
   `;

   const completedInput = document.createElement('input');
   completedInput.type = 'checkbox';
   completedInput.name = 'completed';

   const submitButton = document.createElement('button');
   submitButton.type = 'submit';
   submitButton.textContent = 'Submit';
   submitButton.style.cssText = `
      width: 100%;
      height: 40px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      background-color: #4CAF50;
      color: white;
      cursor: pointer;
   `;

   form.appendChild(titleInput);
   form.appendChild(descriptionInput);
   form.appendChild(dueDateInput);
   form.appendChild(priorityInput);
   form.appendChild(notesInput);
   form.appendChild(checklistInput);
   form.appendChild(projectsInput);
   form.appendChild(completedInput);
   form.appendChild(submitButton);

   return form;
}

function closeNewTaskBox() {
   document.removeEventListener('keydown', handleEscapeKey);
   document.getElementById('newTaskBox').remove();
   BlurLayer.remove("overlay");
}
