// Import the functions from taskManager.js here.
//const task = require('./taskManager.js');


//const newTaskNameInput = ['Washing dishes', 'Laundry', 'Cooking', 'Shopping', 'Mopping','Sweeping']

// Task 6 Step 2 Creating a Function

function validFormFieldInput(data) {
    


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

}

//Task 4 Step2 Testing the code

const tasks = new TaskManager()
console.log(tasks);

 tasks.addTask(name, description, assignedTo, dueDate, status);
console.log(tasks);

//Task 5 step 1 test the code

var taskHtml = createTaskHtml(name, description, assignedTo, dueDate, status);
console.log(tasks);




const alert = document.getElementById("dangerAlert");

