import TaskManager from './taskManager.js';
import createTaskHtml from './taskManager.js';

//Task 4 step 4 intialize the TaskManager

const task = new TaskManager();
addTask.addEventListener('click', () => {

    // Task 6 Step 2 Creating a Function

function validFormFieldInput(data) {
   

}


    

const inputTaskName = document.querySelector('#inputTaskName');
const name = inputTaskName.value;
console.log('name: '+name);

const taskContainer = document.getElementById("taskContainer");
console.log(taskContainer)

const inputTaskDescription = document.querySelector('#inputTaskDescription');
const description = inputTaskDescription.value;
console.log('description: '+description);

const inputAssignedTo = document.querySelector('#inputAssignedTo');
const assignedTo = inputAssignedTo.value;
console.log('assignedTo: '+assignedTo);

const newStatus = document.querySelector('#inputStatus');
const status = inputStatus.value;
console.log('status: '+'');

const selectDueDate = document.querySelector('#selectDueDate');
const dueDate = selectDueDate.value;
console.log('dueDate: '+dueDate);


//Task 6 step 3. Showing Errors to users

const warning = (field) => {

    const alert = document.createElement('div');
    alert.classList.add('warning', 'absolute');
    console.log(alert);
    alert.setAttribute('id', 'warning');
    alert.innerHTML = `
    <div class="alert alert-danger" role="alert" id="dangerAlert">
    <p> ${field} has not been filled out. </p>
  </div>
    `; 

   
    
    taskContainer.prepend(alert);
}

// write if/else statements check to see if any input field is empty
if(!inputTaskName.value){
    warning('Task name');
}
 if (!inputTaskDescription.value) {
    warning('Description');
} 
 if (!inputAssignedTo.value) {
    warning('AssignedTo');
}
 if (!inputStatus.value) {
    warning('status');
} if (!selectDueDate.value)
    warning('Duedate');





//Task 4 Step2 Testing the code

const tasks = new TaskManager();
console.log(tasks);

 tasks.addTask(name, description, assignedTo, dueDate, status);
console.log(tasks);


tasks.render();

})






