angular
    .module('myApp', ['ngRoute','ngSanitize','interval','catalog','book'])

    .config(function ($routeProvider) {
          $routeProvider.otherwise({redirectTo: '/catalog'});
    })

