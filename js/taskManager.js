//Task 5
//step1: create a function using template literals to return the HTML for each individual task

 let createTaskHtml = (name, description, assignedTo, dueDate, status) => {

    const html = `<div class="row">
    <div class="col-4">
      <div class="card">
        <div id="cardForm">
          <div class="card-body text-dark bg-light">
            <p class="card-text">${name}</p>
            <p class="card-text">${description}</p>
            <p class="card-text">${assignedTo}</p>
            <p class="card-text">${dueDate}</p>
            <p class="card-text">${status}</p>
           <a href="#" class="btn btn-success"> Mark Done</a> 
            <a href="#" class="btn btn-danger">delete</a>
          </div>
        </div>
      </div><br>

    </div>                    
  </div>`

}





//Task 4 Step2: 

class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
    
  }

  addTask(name, description, assignedTo, dueDate, status) {
    this.currentId++;
    
    //task4 step3 
    const task = {
      Id:`${this.currentId}`,
      name:`${name}`,
      description:`${description}`,
      assignedTo:`${assignedTo}`,
      dueDdate:`${dueDate}`,
      status:`${status}`

    }

    this.tasks.push(task);
  }

  render() {
    const tasksHtmlList = [];

    for (let i=0; i< this.tasks.length; i++) {
      const task = this.tasks[i];

      const date = new Date(task.dueDate);
      const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(); 

      const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status);

      // Push it to the tasksHtmlList array
      tasksHtmlList.push(taskHtml);

      
    }

    const tasksHtml = tasksHtmlList.join('\n');

    const tasksList = document.querySelector('#tasksList');
    tasksList.innerHTML = tasksHtml;


  
  }

  
}




