// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener("click" , addTodo);
todoList.addEventListener('click',deleteCheck);





//Functions
 
function addTodo(event){
    // prevent form refresh
    event.preventDefault();
    // create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complet-button");
    todoDiv.appendChild(completedButton);

    // DELETE BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //conect to todo-list
    todoList.appendChild(todoDiv);

    // clear input
    todoInput.value="";

    
}

// fuction delete
function deleteCheck(x){
 const item = x.target;
 if (item.classList[0] === "trash-btn"){
     const todo =item.parentElement;
     todo.remove();
 }

 //check
 if (item.classList[0] === "complet-button"){
 const todo = item.parentElement;
 todo.classList.toggle("done");
}
}