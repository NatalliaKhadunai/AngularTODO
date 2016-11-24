(function() {
    'use strict';

    angular
        .module('mainComponentModule')
        .controller('mainComponentCtrl', mainCtrl);

    function mainCtrl() {
        let self = this;

        self.item = {};
        self.items = [];
        self.search;
        self.itemsPerPage = 3;
        self.currentPage = 0;

        self.addItem = function () {
            self.items.push({
                description: self.item.description,
                deadline: self.item.deadline,
                done: false,
                editing: false
            });
        };

        self.editItem = function (item) {
            item.editing? item.editing = false: item.editing = true;
        };

        self.deleteItem = function (item) {
            var index = self.items.indexOf(item);
            self.items.splice(index, 1);
        };

        self.sort = function (sortField) {
            if (self.sortField == sortField) {
                self.sortOrder? self.sortOrder = false : self.sortOrder = true;
            }
            else {
                self.sortField = sortField;
                self.sortOrder = true;
            }
        };

        self.defineClass = function (deadline) {
            if (deadline < new Date()) return 'red';
        }

        self.firstPage = function() {
            return self.currentPage == 0;
        }
        self.lastPage = function() {
            var lastPageNum = Math.ceil(self.items.length / self.itemsPerPage - 1);
            return self.currentPage == lastPageNum;
        }
        self.numberOfPages = function(){
            return Math.ceil(self.items.length / self.itemsPerPage);
        }
        self.startingItem = function() {
            return self.currentPage * self.itemsPerPage;
        }
        self.pageBack = function() {
            self.currentPage = self.currentPage - 1;
        }
        self.pageForward = function() {
            self.currentPage = self.currentPage + 1;
        }
    }

})();
