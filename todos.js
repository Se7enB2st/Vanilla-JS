var todos = ['item 1', 'item 2', 'item 3'];

// It should display todos when call the display function
function displayTodos() {
  console.log('My todos:', todos);
}

// it should add a todo when call the add function
function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

// it should change todo when call the change function
function changeTodo(position, newTodo) {
  todos[position] = newTodo;
  displayTodos();
}

// it should delete a todo when call delete function
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}
