(function () {
    'use strict';

    angular
        .module('app')
        .service('todoService', function () {
            let self = this;

            self.items = [];

            self.getItems = function () {
                return self.items;
            };
        });
})();