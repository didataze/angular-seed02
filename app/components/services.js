'use strict';

angular
    .module('services', [])

    .value('tva', 1.20)

    .factory("catalogService", function ($http) {
        var url = "https://api.mongolab.com/api/1/databases/books/collections/books/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i"

        var promise = $http.get(url).then(function (response) {
            return response.data;
        });

        return {
            getList: function () {
                return promise;
            },
            getBook: function (id) {

                return promise.then(function (books) {
                    for (var i = 0 ; i < books.length ; i++) {
                        if (books[i]._id.$oid == id) {
                            return books[i];
                        }
                    }
                    throw "Book not found: " + id;
                });


                // var bookUrl =
                //     "https://api.mongolab.com/api/1/databases/books/collections/books/"
                //     + id
                //     + "?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i";
                // $http.get(bookUrl).then(function (response) {
                //     bookCtrl.book = response.data;
                // });

            }
        }

    })
    .factory("stateService", function () {
        var states = {};
        return function (pageId, initialValue) {
            return states[pageId] || (states[pageId] = initialValue);
        };
    })
    .factory("orderService", function () {

        var list = [
            {expr: 'price', reverse: false, label: "Prix croissant"},
            {expr: 'price', reverse: true, label: "Prix décroissant"},
            {expr: 'title', reverse: false, label: "Titre"}
        ];

        return {
            options: list,
            default: list[1]
        };

    })
    .factory("cart", function (tva) {
        return {
            rows: [],

            isWarning: function (row) {
                return this.amount(row) > 1000;
            },
            addBook: function (book) {
                this.rows.push({book: book, quantity: 1});
            },
            amount: function (row) {
                return row.book.price * row.quantity;
            },
            amountWithTax: function (row) {
                return this.amount(row) * tva;
            },
            total: function () {
                return this.rows.reduce(function (total, row) {
                    return total + this.amount(row);
                }.bind(this), 0);
            },
            totalWithTax: function () {
                return this.rows.reduce(function (total, row) {
                    return total + this.amountWithTax(row);
                }.bind(this), 0);
            },
            removeRow: function (row) {
                this.rows.splice(this.rows.indexOf(row), 1);
            },
            isEmpty: function () {
                console.log("aze");
                return this.rows.length == 0;
            },
            vider: function () {
                console.log("aze");
                return this.rows.length = 0;
            }

        }
        // console.log(rows);
    })