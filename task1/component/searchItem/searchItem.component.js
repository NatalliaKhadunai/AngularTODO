(function () {
    'use strict';
    angular.module('mainComponentModule')
        .component('searchItem', {
            templateUrl: 'component/searchItem/searchItem.html',
            transclude: true,
            controller: 'searchItemCtrl',
            require: {
                'parent': '^mainComponent'
            }
        });
})();