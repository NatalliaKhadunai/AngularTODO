(function() {
    'use strict';

    angular
        .module('mainComponentModule')
        .factory('pageCountFactory', function () {
            var itemsPerPage = 3;
            var currentPage = 0;
            return {
                getItemsPerPage : function () {
                    return itemsPerPage;
                },
                getCurrentPage : function () {
                    return currentPage;
                },
                incrementCurrentPage : function(){
                    currentPage++;
                    return currentPage;
                },
                decrementCurrentPage : function () {
                    currentPage--;
                    return currentPage;
                }
            }
        });

})();