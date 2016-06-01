angular.module('app', ['ngRoute', 'angular.filter'])
  // .config(($routeProvider) => {   //route gives you the .when and .otherwise

//one way
  //   $routeProvider
  //     .when('/', {
  //       template: '<a href="#/hello">Hello</a><h1>Home Sweet Home</h1>',
  //     })
  //     .when('/hello', {
  //       template: '<a href="#/">Home</a><h1>{{header}}</h1>',
  //       controller: 'MainCtrl',
  //     })
  //     .when('/hello/:name', {
  //       template: '<a href="#/">Home</a><h1>{{header}}</h1>',
  //       controller: 'MainCtrl',
  //     })
  //     .otherwise('/')
  // })

  // .controller('MainCtrl', function ($scope, $routeParams) {
  //   // $scope.header = `Hello ${$routeParams.name}`
  //   // const { name } = $routeParams
  //   $scope.header = `Hello ${$routeParams.name || 'Angular Peepz'}` //to finish the hello/
  // })

 //OR with a input and button
//Now skipped
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'app/partials/home.html'
  //     })
  //     .when('/hello', {
  //       templateUrl: 'app/partials/hello.html',
  //       controller: 'HelloCtrl',
  //     })
  //     .when('/hello/:name', {
  //       templateUrl: 'app/partials/hello-person.html',
  //       controller: 'HelloPersonCtrl',
  //     })
  //     .otherwise('/')
  // })
  // .controller('HelloCtrl', function ($scope, $location) {
  //   $scope.hello = () => $location.path(`/hello/${$scope.name}`)
  // })
  // .controller('HelloPersonCtrl', function ($scope, $routeParams) {
  //   $scope.header = `Hello ${$routeParams.name}`
  // })

  // .filter('camelcase', function () {
  //   return function (string) {
  //     return string.tuUpperCase()
  //   }
  // })

  // // or
  //   .filter('camelcase', () => string => string.toUpperCase())
  // })

//now skipped
  // .filter('camelcase', () => (
  //     string => {
  //       const upperCamelCase = string
  //         .toLowerCase()
  //         .split(' ')
  //         .map(word => word[0].toUpperCase() + word.slice(1))
  //         .join('')

  //       return upperCamelCase[0].toLowerCase() + upperCamelCase.slice(1)
  //     }
  //   )
  // )
