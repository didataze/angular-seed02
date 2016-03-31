/**
 * Created by defaut on 30/03/2016.
 */

angular.module('interval', [])

    .filter('interval', function () {
        return function (array, min, max) {
            return array && array.filter(function (item) {
                    var value = item.price;
                    return (!min || value >= min) && (!max || value <= max);

                });
        }
    })

    .filter('interval2', function ($parse) {
        return function (array, expr, min, max) {
            var getter = $parse(expr);
            return array && array.filter(function (item) {

                    var value = getter(item);
                    return (!min || value >= min) && (!max || value <= max);
                });
        }

    })
