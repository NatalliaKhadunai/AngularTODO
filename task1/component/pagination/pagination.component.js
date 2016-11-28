(function () {
    'use strict';
    angular.module('app')
        .component('pagination', {
            templateUrl: 'component/pagination/pagination.html',
            controller: 'paginationCtrl',
            bindings: {
                items: '='
            }
        });
})();