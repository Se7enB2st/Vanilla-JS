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

  toggleAll: function () {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    // Get number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    // If everything is true, make everything false
    if (completedTodos === totalTodos) {
      //Make everything false
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
      // Otherwise, make everything true
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

// var displayTodosButton = document.getElementById('displayTodosButton');
// var toggleAllButton = document.getElementById('toggleAllButton');

// displayTodosButton.addEventListener('click', function() {
//  todosList.displayTodos();
// });

// toggleAllButton.addEventListener('click', function() {
//  todosList.toggleAll();
// });

var handlers = {
  displayTodos: function () {
    todosList.displayTodos();
  },
  addTodo: function () {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todosList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
  },
  changeTodo: function () {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todosList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
  },
  deleteTodo: function () {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todosList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
  },
  toggleCompleted: function () {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todosList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value='';
  },
  toggleAll: function () {
    todosList.toggleAll();
  }
};
