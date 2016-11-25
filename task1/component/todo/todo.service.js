(function () {
    'use strict';

    angular
        .module('mainComponentModule')
        .service('todoService', function () {
            let self = this;

            self.items = [];

            self.getItems = function () {
                return self.items;
            };
        });
})();