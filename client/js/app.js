var app = angular.module("omdbApp",['ngRoute']);

// due to time -> everything will be done on the home page!!!
app.config(function($routeProvider, $locationProvider, $httpProvider){

  $routeProvider
  .when("/", {
    templateUrl: "templates/movie.html",
    controller: "moviesController"
  })
  .otherwise({redirectTo: '/'});

});