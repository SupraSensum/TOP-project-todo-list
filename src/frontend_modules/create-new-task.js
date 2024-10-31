import createBlurLayer from "./create-blur-layer";

export default function () {
   if (!document.getElementById('newTaskBox')) {
      createBlurLayer(9998);
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
      newTaskBox.appendChild(header);
      
      newTaskBox.appendChild(createForm());
   
      document.body.appendChild(newTaskBox);
   
      console.log('create new task');
   } else {
      console.log('new task already exists');
   }
}

function createForm() {
   const form = document.createElement('form');
   form.id = "newTaskForm";
   form.onsubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const title = formData.get('title');
      const description = formData.get('description');
      const dueDate = formData.get('dueDate');
      const priority = formData.get('priority');
      const notes = formData.get('notes');
      const checklist = formData.get('checklist');
      const projects = formData.getAll('projects');
      const completed = formData.get('completed');

      createTask({
         title,
         description,
         dueDate,
         priority,
         notes,
         checklist,
         projects,
         completed,
      })
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
      border: 3px solid red;
   `;
   const titleInput = document.createElement('input');
   titleInput.type = 'text';
   titleInput.name = 'title';
   titleInput.placeholder = 'title';
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

   form.appendChild(titleInput);
   form.appendChild(descriptionInput);
   form.appendChild(dueDateInput);
   form.appendChild(priorityInput);
   form.appendChild(notesInput);
   form.appendChild(checklistInput);
   form.appendChild(projectsInput);
   form.appendChild(completedInput);
   form.appendChild(document.createElement('button'), { type: 'submit' });

   return form;
}
