(function () {
    'use strict';
    angular.module('app',['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                template: '<h1>Hello</h1><p>Here you can easily manage your todo\'s</p>'
            })
            .state('todo', {
                url: '/todo',
                template: '<todo items="$resolve.items"></todo><hr><pagination items="$resolve.items"></pagination>',
                resolve: {
                    items: function (todoService) {
                        return todoService.getItems();
                    }
                }
            });
    });
})();