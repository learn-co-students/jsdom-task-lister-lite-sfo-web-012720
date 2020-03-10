document.addEventListener("DOMContentLoaded", () => {
    const todos = document.getElementById("tasks");
    const newTodo = document.createElement("li");
    const form  = document.getElementById("create-task-form");
    form.addEventListener('submit', function(event){
      event.preventDefault();
      const input = document.getElementById('new-task-description');
      newTodo.innerText = input.value 
      todos.appendChild(newTodo)
    } );
  });
  
  