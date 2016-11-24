(function () {
    'use strict';

    angular
        .module('mainComponentModule')
        .controller('paginationCtrl', function (itemsFactory, pageCountFactory) {
            let self = this;

            self.items = itemsFactory.items;

            self.firstPage = function() {
                return pageCountFactory.getCurrentPage() == 0;
            }
            self.lastPage = function() {
                var lastPageNum = Math.ceil(self.items.length / pageCountFactory.getItemsPerPage() - 1);
                return pageCountFactory.getCurrentPage() == lastPageNum;
            }
            self.numberOfPages = function(){
                return Math.ceil(self.items.length / pageCountFactory.getItemsPerPage());
            }
            self.pageBack = function() {
                pageCountFactory.decrementCurrentPage();
            }
            self.pageForward = function() {
                pageCountFactory.incrementCurrentPage();
            }
        });
})();