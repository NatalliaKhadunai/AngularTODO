(function () {
    'use strict';
    angular.module('mainComponentModule')
        .component('todoTable', {
            templateUrl: 'component/todoTable/todoTable.html',
            transclude: true,
            controller: 'todoTableCtrl',
            require: {
                'parent': '^mainComponent'
            }
        });
})();