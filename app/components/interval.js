/**
 * Created by defaut on 30/03/2016.
 */

angular.module('interval', [])

    .filter( function() {
        return function(array, min, max) {
            return array && array.filter(function (item) {
                var value = item.price;
                return (!min || value >= min) && (!max || value <= max);

            }) ;
        }
    })