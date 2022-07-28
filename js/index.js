// Import the functions from taskManager.js here.
//const task = require('./taskManager.js');


//const newTaskNameInput = ['Washing dishes', 'Laundry', 'Cooking', 'Shopping', 'Mopping','Sweeping']

// Task 6 Step 2 Creating a Function

function validFormFieldInput(data) {
    
}

const inputTaskName = document.querySelector('#inputTaskName');
const taskName = inputTaskName.value;
console.log('taskName: '+taskName);

const inputTaskDescription = document.querySelector('#inputTaskDescription');
const taskDescription = inputTaskDescription.value;
console.log('taskDescription: '+taskDescription);

const inputAssignedTo = document.querySelector('#inputAssignedTo');
const assignedTo = inputAssignedTo.value;
console.log('assignedTo: '+assignedTo);

const newStatus = document.querySelector('#inputStatus');
const status = inputStatus.value;
console.log('status: '+'');

const selectDueDate = document.querySelector('#selectDueDate');
const dueDate = selectDueDate.value;
console.log('dueDate: '+dueDate);


//Task 5 step 1 test the code

const taskHtml = createTaskHtml('dish wash','The dish should be clean', 'CharSelBez', '20/07/2022', 'Done');
console.log(taskHtml);

//hide the card//
const card = document.getElementById('cardForm');

document.getElementById('cardForm').style.display = "none";

 

