var todosList = {
  todos: [],

  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText, //First todoText is name of property, 2nd one is the arguement
      completed: false
    });
  },

  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText;
  },

  deleteTodo: function (position) {
    this.todos.splice(position, 1);
  },

  toggleCompleted: function (position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
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
  }
};

var handlers = {
  addTodo: function () {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todosList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function () {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todosList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function () {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todosList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function () {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todosList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value='';
    view.displayTodos();
  },
  toggleAll: function () {
    todosList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function () {
    var todosUI = document.querySelector('ul');
    todosUI.innerHTML = '';
    for (var i = 0; i < todosList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todosList.todos[i];
      var todoTextWithCompletion = '';

      if(todo.completed === true) {
        todoTextWithCompletion = '(x)' + todo.todoText;
      } else {
        todoTextWithCompletion = '( )' + todo.todoText;
      }

      todoLi.textContent = todoTextWithCompletion;
      todosUI.appendChild(todoLi);
    }
  }
};
