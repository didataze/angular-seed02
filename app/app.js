'use strict';
angular
    .module('myApp', ['ngRoute','ngSanitize','interval','services','catalog','book'])

    .config(function ($routeProvider) {
          $routeProvider.otherwise({redirectTo: '/catalog'});
    })

