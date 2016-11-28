(function () {
    'use strict';
    angular.module('app')
        .filter('startFrom', function(){
            return function(items, start){
                start = +start;
                return items.slice(start);
            }
        });
})();