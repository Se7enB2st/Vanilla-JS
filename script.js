var todosList = {
  todos: [],
  displayTodos: function () {
    console.log('My Todos:', this.todos);
  },
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText, //First todoText is name of property, 2nd one is the arguement
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function (position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};

todosList.addTodo('Byeeee World');
todosList.changeTodo(0, "Hello World");
todosList.toggleCompleted(0);
