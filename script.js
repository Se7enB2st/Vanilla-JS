var todosList = {
  todos: [],
  displayTodos: function () {
    if (this.todos.length === 0) {
      console.log('Todolist is empty');
    } else {
      console.log('My Todos:');
      for (var i = 0; i < this.todos.length; i++) {
        console.log(this.todos[i].todoText);
        if (this.todos[i].completed === true) {
            console.log('(x)', this.todos[i].todoText);
        } else {
            console.log('( )', this.todos[i].todoText);
        }
      }
    }
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
  },
};

todosList.addTodo('Eat');
todosList.addTodo('Sleep');
todosList.addTodo('Code');

todosList.toggleCompleted(0);
