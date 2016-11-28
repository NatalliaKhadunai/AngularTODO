(function () {
    'use strict';

    angular
        .module('app')
        .service('paginationService', function () {
            let self = this;

            self.itemsPerPage = 3;
            self.currentPage = 0;

            self.getItemsPerPage = function () {
                return self.itemsPerPage;
            };
            self.getCurrentPage = function () {
                return self.currentPage;
            };
            self.incrementCurrentPage = function () {
                self.currentPage++;
                return self.currentPage;
            };
            self.decrementCurrentPage = function () {
                self.currentPage--;
                return self.currentPage;
            };
        });
})();