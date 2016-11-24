(function () {
    'use strict';
    angular.module('mainComponentModule')
        .filter('startFrom', function(){
            return function(items, start){
                start = +start;
                return items.slice(start);
            }
        });
})();