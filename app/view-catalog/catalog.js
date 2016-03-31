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

        catalogCtrl.orderOptions = [
            {expr: 'price', reverse: false, label: "Prix croissant"},
            {expr: 'price', reverse: true,  label: "Prix décroissant"},
            {expr: 'title', reverse: false, label: "Titre"}
        ];
        catalogCtrl.selectedOrder = catalogCtrl.orderOptions[1];
    })