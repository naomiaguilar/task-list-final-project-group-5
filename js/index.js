// Import the functions from taskManager.js here.
//const task = require('./taskManager.js');


const task = new TaskManager();
addTask.addEventListener('click', () => {
    task.save();

//const newTaskNameInput = ['Washing dishes', 'Laundry', 'Cooking', 'Shopping', 'Mopping','Sweeping']




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

}





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




const tasks = new TaskManager()
console.log(tasks);

 tasks.addTask(name, description, assignedTo, dueDate, status);
console.log(tasks);

//Task 5 step 1 test the code

var taskHtml = createTaskHtml(name, description, assignedTo, dueDate, status);
console.log(tasks);



//Task 4 Step2 Testing the code

//const tasks = new TaskManager();
//console.log(tasks);

 task.addTask(name, description, assignedTo, dueDate, status);
console.log(task);


task.render();

})

//Task 7 step2 
taskContainer.addEventListener('click', (event) => {
    //console.log(event.target);
    if(event.target.classList.contains('markAsDone')) {
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
       console.log(parentTask.dataset.id);
       let passId = +parentTask.dataset.id;
       let task1 = task.getTaskById(passId);
       task1.status = 'DONE';
       task.render();
       
    }
})


const alert = document.getElementById("dangerAlert");

