(function () {
    'use strict';
    angular.module('app')
        .component('todo', {
            templateUrl: 'component/todo/todo.html',
            controller: 'todoCtrl',
            bindings: {
                items: '='
            }
        });
})();