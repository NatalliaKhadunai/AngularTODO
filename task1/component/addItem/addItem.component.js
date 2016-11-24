(function () {
    'use strict';
    angular.module('mainComponentModule')
        .component('addItem', {
            templateUrl: 'component/addItem/addItem.html',
            transclude: true,
            controller: 'addItemCtrl',
            require: {
                'parent': '^mainComponent'
            }
        });
})();