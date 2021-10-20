const taskContainer = document.querySelector(".task__container");
let globalStore = [];
console.log("the task container");
const generateNewCard = (taskData) => `<div class="col-sm-12 col-lg-4 col-md-6" >
    
<div class="card">
  <div class="card-header d-flex justify-content-end gap-3">
    <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
    <button type="button" class="btn btn-outline-danger" id=${taskData.id} 
    onClick="deleteCard.apply(this.arguments)"><i class="fas fa-trash-alt" 
    id=${taskData.id} onClick="deleteCard.apply(this.arguments)"></i></button>
  </div>
  <div class="card-body">
    <img src= ${taskData.imageUrl} alt=".......">
    <h5 class="card-title mt-3 navbar-brand fw-bold text-primary">${taskData.taskTitle}</h5>
    <p class="card-text">${taskData.taskDescription}</p>
    <a href="#" class="btn btn-primary">${taskData.taskType}</a>
  </div>
</div>
</div>`;

const loadInitialCardData = () => {
  //localstorage to get tasky card data
  const getCardData = localStorage.getItem("tasky");

//convert to normal object
  const {cards} = JSON.parse{getCardData);




//loop over thode array of task object to create HTML card , inject it to DOM

cards.map((cardObject) => {
  taskContainer.insertAdjacentHTML{"beforeend", generatenewCard(cardObject)};

  //update our globalstore
  globalStore.push(cardObject);
})


  };


//Delete Function

const deleteCard = (event) => {
        event = window.event;
        const targetID = event.target.id;

        const tagName = event.target.tagName;

        globalStore = globalStore.filter((cardObject) => cardObject.id !== targetID);
        locakStorage.setItem("tasky",JSON.stringify({cards: globalStore}));

        if(tagName === "BUTTON") {
          return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode);
        } else {
          return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
        }

        };
 
};




const saveChanges = () => {
    const taskData = {
        id : '${Date.now()}',
        imageUrl : document.getElementById("imageurl").value,
        taskTitle : document.getElementById("tasktitle").value,
        taskType : document.getElementById("tasktype").value,
        taskDescription : document.getElementById("taskdescription").value,        
    }
    const newCard = `<div class="col-sm-12 col-lg-4 col-md-6" >
    
    <div class="card">
      <div class="card-header d-flex justify-content-end gap-3">
        <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
        <button type="button" class="btn btn-outline-danger" id=${taskData.id}><i class="fas fa-trash-alt"></i></button>
      </div>
      <div class="card-body">
        <img src= ${taskData.imageUrl} alt=".......">
        <h5 class="card-title mt-3 navbar-brand fw-bold text-primary">${taskData.taskTitle}</h5>
        <p class="card-text">${taskData.taskDescription}</p>
        <a href="#" class="btn btn-primary">${taskData.taskType}</a>
      </div>
    </div>
  </div>`;
 
 
  taskContainer.insertAdjacentHTML("beforeend",newCard);
};