'use strict';
angular
    .module('cartMod', ['services'])

    .config(function ($routeProvider) {
        $routeProvider.when('/cart', {
            templateUrl: 'view-cart/cart.html',
            controller: 'CartController',
            controllerAs: 'cartCtrl'
        });

    })

    .controller('CartController', function ($http,$rootScope,cart) {
        var cartCtrl = this;

        cartCtrl.cartService = cart;


        cartCtrl.buy = function (book,qte) {
            cart.addBook(book);
            // console.log(cart.rows);
            $location.url('/cart');
        };

      
    })