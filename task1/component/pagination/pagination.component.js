(function () {
    'use strict';
    angular.module('mainComponentModule')
        .component('pagination', {
            templateUrl: 'component/pagination/pagination.html',
            transclude: true,
            controller: 'paginationCtrl',
            require: {
                'parent': '^mainComponent'
            }
        });
})();