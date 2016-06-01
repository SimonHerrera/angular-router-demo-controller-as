angular.module("app")
  .config(($routeProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: 'app/partials/home.html'
      })
      .when('/todo', { //added later
        templateUrl: 'app/partials/todo.html',
        controller: 'TodoCtrl'
      })
      .when('/hello', {
        templateUrl: 'app/partials/hello.html',
        controller: 'HelloCtrl',
      })
      .when('/hello/:name', {
        templateUrl: 'app/partials/hello-person.html',
        controller: 'HelloPersonCtrl',
      })
      .otherwise('/')
  })