/**
 * Created by mac on 9/2/16.
 */
(function () {
    'use strict';

    angular.module("app.admin.books")
        .controller("BooksController",BooksController);

    function BooksController($state,$rootScope,MyBooksService,Books) {
        var vm = this;
        vm.currentPage = 1;
        vm.booksPerPage = 6;
        vm.query = "";
        vm.currentState = $state.current.name;
        $rootScope.currentState = $state.current.name;
        vm.getBooks = getBooks;
        vm.initSearch = initSearch;
        vm.getBooks();

        function getBooks2(){
            Books.getList().then(function(data){
                vm.books = data;
                vm.itemsCount = data.length;
            });
        }
        
        function getBooks() {
            //debugger;
            MyBooksService.getBooks(vm.currentPage, vm.query).then(function (data) {
                vm.books = data.results;
                vm.itemsCount = data.count;

                //debugger;
            }, function (error) {
                //debugger;
            });
        }

        function initSearch() {
            vm.currentPage = 1;
            vm.getBooks();
            //debugger;
        }

    }

})();