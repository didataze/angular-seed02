'use strict';

angular
    .module('book', [
    ])

    .config(function ($routeProvider) {
        $routeProvider.when('/book/:bookId', {
            controller: 'BookController',
            controllerAs: 'bookCtrl',
            templateUrl: 'view-book/book.html'
        })
    })

    .controller('BookController', function ($http,  $routeParams , $rootScope,catalogService) {
        var bookCtrl = this;
        var affiche = false;
        // var bookUrl =
        //     "https://api.mongolab.com/api/1/databases/books/collections/books/"
        //     + $routeParams.bookId
        //     + "?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i";
        // $http.get(bookUrl).then(function (response) {
        //     bookCtrl.book = response.data;
        //     $rootScope.pageTitle = "Livre: " + bookCtrl.book.title;
        // });

        catalogService.getBook($routeParams.bookId).then(function (data) {
            bookCtrl.book = data;
            bookCtrl.affiche=true;
        }, function (error) {
            bookCtrl.affiche=false;
            bookCtrl.error = error;

        });
        

    })
;
