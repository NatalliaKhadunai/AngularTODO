(function () {
    'use strict';

    angular
        .module('app')
        .controller('paginationCtrl', function (todoService, paginationService) {
            let self = this;

            self.firstPage = function() {
                return paginationService.getCurrentPage() == 0;
            }
            self.lastPage = function() {
                var lastPageNum = Math.ceil(self.items.length / paginationService.getItemsPerPage() - 1);
                return paginationService.getCurrentPage() == lastPageNum;
            }
            self.numberOfPages = function(){
                return Math.ceil(self.items.length / paginationService.getItemsPerPage());
            }
            self.pageBack = function() {
                paginationService.decrementCurrentPage();
            }
            self.pageForward = function() {
                paginationService.incrementCurrentPage();
            }
        });
})();