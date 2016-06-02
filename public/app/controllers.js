angular.module('app')
  .controller('HelloCtrl', function ($scope, $location) {
    $scope.hello = () => $location.path(`/hello/${$scope.name}`)
  })
  .controller('HelloPersonCtrl', function ($scope, $routeParams) {
    $scope.header = `Hello ${$routeParams.name}`
  })


  .controller('TodoCtrl', function ($scope, $http) {
    $http.get('https://angular-todo-c7434.firebaseio.com/todo.json')
      .then(res => $scope.todos = res.data)

    $scope.toggleTodo = (id) => {
      // optimistic update
      $scope.todos[id].completed = !$scope.todos[id].completed

      $http.patch(`https://angular-todo-c7434.firebaseio.com/todo/${id}.json`, {
        completed: $scope.todos[id].completed
      }).catch(res => $scope.todos[id].completed = !$scope.todos[id].completed)

// this way waits for response, slower
      // $http.patch(`https://angular-todo-c7434.firebaseio.com/todo/${id}.json`, {
      //   completed: !$scope.todos[id].completed
      // }).then(res => $scope.todos[id].completed = res.data.completed)
    }
  })

  // .service('MyService', function () {
  //   this.name = 'Scott'
  // })

//OR
  .factory('myFactory', () => ({
    name: 'Simon'
  }))
