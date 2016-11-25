(function () {
    'use strict';

    angular
        .module('mainComponentModule')
        .controller('todoCtrl', function (todoService, paginationService) {
            let self = this;

            self.items = todoService.getItems();
            self.item = {};
            self.search;
            self.itemsPerPage = paginationService.getItemsPerPage();

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

            self.startingItem = function() {
                return paginationService.getCurrentPage() *
                    paginationService.getItemsPerPage();
            }
        });
})();