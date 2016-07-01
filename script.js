var todosList = {
  todos: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'],
  displayTodos: function () {
    console.log('My Todos:', this.todos);
  },
  addTodos: function (todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function (position, todo) {
    this.todos[position] = todo;
    this.displayTodos();
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
