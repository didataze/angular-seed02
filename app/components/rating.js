'use strict';

angular
    .module('bookstore.comp.util.rating', [])

    .directive('rating', function () {
        return function (scope, element, attrs) {
            scope.$watchGroup([
                attrs.rating,
                attrs.max
            ], function (values) {
                var rating = values[0],
                    max = values[1];
                var html = '';
                for (var i = 0; i < rating; i++) {
                    html += '<img src="img/star.png">';
                }
                for ( ; i < max; i++) {
                    html += '<img src="img/empty-star.png">';
                }
                element.html(html);
            });
        };
    })
;

