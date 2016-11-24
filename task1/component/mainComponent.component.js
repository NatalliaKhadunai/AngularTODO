(function() {
    'use strict';

    angular
        .module('mainComponentModule')
        .component('mainComponent', {
            templateUrl: 'component/mainComponent.html',
            controller: 'mainComponentCtrl',
            transclude: true,
            bindings: {
                'item': '='
            }
        });

})();