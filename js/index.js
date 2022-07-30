import TaskManager from './taskManager.js';
import createTaskHtml from './taskManager.js';

//Task 4 step 4 intialize the TaskManager

const task = new TaskManager;
addTask.addEventListener('click', () => {

    // Task 6 Step 2 Creating a Function

function validFormFieldInput(data) {
    
}

const inputTaskName = document.querySelector('#inputTaskName');
const name = inputTaskName.value;
console.log('name: '+name);

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



//Task 4 Step2 Testing the code

const tasks = new TaskManager();
console.log(tasks);

 tasks.addTask(name, description, assignedTo, dueDate, status)
console.log(tasks);


TaskManager.render;

})






