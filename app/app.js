angular
    .module('myApp', ['ngRoute','ngSanitize','catalog','book'])

    .config(function ($routeProvider) {
          $routeProvider.otherwise({redirectTo: '/catalog'});
    })

