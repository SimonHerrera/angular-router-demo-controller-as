angular.module('app')
  .controller('HelloCtrl', function ($location) {
    const hello = this

    hello.sayHello = () => $location.path(`/hello/${hello.name}`)
  })
  .controller('HelloPersonCtrl', function ($routeParams) {
    const helloPerson = this

    helloPerson.header = `Hello ${$routeParams.name}`
  })
  .controller('TodoCtrl', function ($scope, todoFactory) {
    const t = this

    todoFactory.getTodos().then(todos => t.todos = todos)

    t.toggleTodo = (id) => {
      // optimistic update
      t.todos[id].completed = !t.todos[id].completed

      todoFactory.toggleTodo(id)
        .catch(res => t.todos[id].completed = !t.todos[id].completed)
    }
  })
