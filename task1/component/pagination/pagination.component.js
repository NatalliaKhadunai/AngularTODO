(function () {
    'use strict';
    angular.module('mainComponentModule')
        .component('pagination', {
            templateUrl: 'component/pagination/pagination.html',
            controller: 'paginationCtrl'
        });
})();