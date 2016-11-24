(function() {
    'use strict';

    angular
        .module('mainComponentModule')
        .factory('itemsFactory', function () {
            return {
                items: []
            }
        });

})();