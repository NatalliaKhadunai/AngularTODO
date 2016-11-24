(function () {
    'use strict';
    angular.module('mainComponentModule')
        .component('todo', {
            templateUrl: 'component/todo/todo.html',
            controller: 'todoCtrl'
        });
})();