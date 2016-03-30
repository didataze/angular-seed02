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

    .controller('BookController', function ($http,  $routeParams , $rootScope) {
        var bookCtrl = this;

        var bookUrl =
            "https://api.mongolab.com/api/1/databases/books/collections/books/"
            + $routeParams.bookId
            + "?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i";
        $http.get(bookUrl).then(function (response) {
            bookCtrl.book = response.data;
            $rootScope.pageTitle = "Livre: " + bookCtrl.book.title;
        });

    })
;
