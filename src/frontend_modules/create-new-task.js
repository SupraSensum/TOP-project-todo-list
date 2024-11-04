import BlurLayer from "./blur-layer.js";
import TaskHandler from "../backend_modules/task-handler";
import "./create-new-task.css";

export default function () {
   createNewTaskBox();
}

function createNewTaskBox() {
   if (!document.getElementById('newTaskBox')) {
      BlurLayer.create(9998, "overlay");

      const newTaskBox = document.createElement('div');
      newTaskBox.id = "newTaskBox";

      const header = document.createElement('h2');
      header.textContent = 'Create New Task';

      document.addEventListener('keydown', handleEscapeKey);

      newTaskBox.append(
         createCloseButton(),
         header,
         createTaskForm()
      );
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
   closeButton.id = "closeButton";
   closeButton.textContent = 'X';
   closeButton.onclick = closeNewTaskBox;
   return closeButton;
}

function getFormData(form) {
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

   return {
      title,
      description: description || '',
      dueDate,
      priority,
      notes: notes || '',
      checklist: checklist || '',
      projects: projects.split(','),
      completed,
   };
}

function createTaskForm() {
   const taskHandler = new TaskHandler();

   const form = document.createElement('form');
   form.id = "newTaskForm";
   form.onsubmit = (e) => {
      e.preventDefault();
      taskHandler.createTask(getFormData(form));

      form.reset();
      closeNewTaskBox();
   };

   const titleInput = document.createElement('input');
   titleInput.type = 'text';
   titleInput.name = 'title';
   titleInput.placeholder = 'title';
   titleInput.required = true;
   titleInput.classList.add('normalFormField');

   const descriptionInput = document.createElement('textarea');
   descriptionInput.name = 'description';
   descriptionInput.placeholder = 'description';
   descriptionInput.classList.add('tallerFormField');

   const dueDateInput = document.createElement('input');
   dueDateInput.type = 'date';
   dueDateInput.name = 'dueDate';
   dueDateInput.required = true;
   dueDateInput.classList.add('normalFormField');

   const priorityInput = document.createElement('input');
   priorityInput.type = 'number';
   priorityInput.name = 'priority';
   priorityInput.required = true;
   priorityInput.classList.add('normalFormField');

   const notesInput = document.createElement('textarea');
   notesInput.name = 'notes';
   notesInput.placeholder = 'notes';
   notesInput.classList.add('tallerFormField');

   const checklistInput = document.createElement('textarea');
   checklistInput.name = 'checklist';
   checklistInput.placeholder = 'checklist';
   checklistInput.classList.add('tallerFormField');

   const projectsInput = document.createElement('input');
   projectsInput.type = 'text';
   projectsInput.name = 'projects';
   projectsInput.placeholder = 'projects';
   projectsInput.required = true;
   projectsInput.classList.add('normalFormField');

   const completedInput = document.createElement('input');
   completedInput.type = 'checkbox';
   completedInput.name = 'completed';

   const submitButton = document.createElement('button');
   submitButton.type = 'submit';
   submitButton.textContent = 'Submit';

   form.append(
      titleInput,
      descriptionInput,
      dueDateInput,
      priorityInput,
      notesInput,
      checklistInput,
      projectsInput,
      completedInput,
      submitButton,
   );

   return form;
}

function closeNewTaskBox() {
   document.removeEventListener('keydown', handleEscapeKey);
   document.getElementById('newTaskBox').remove();
   BlurLayer.remove("overlay");
}
