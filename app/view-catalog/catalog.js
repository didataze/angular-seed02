// 'use strict';
angular
    .module('catalog', [])

    .config(function ($routeProvider) {
        $routeProvider.when('/catalog', {
            templateUrl: 'view-catalog/catalog.html',
            controller: 'CatalogController',
            controllerAs: 'catalogCtrl'
        });

    })

    .controller('CatalogController', function ($http,$rootScope) {
        var catalogCtrl = this;

        var url = "https://api.mongolab.com/api/1/databases/books/collections/books/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i"
        $http.get(url).then(function (response) {
            catalogCtrl.catalog = response.data;
            $rootScope.pageTitle = "Liste des Livre";
        })

    })