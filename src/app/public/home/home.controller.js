/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.home')
        .controller('HomeController', HomeController);

    function HomeController($state,BookService,$rootScope) {
        var vm = this;
        vm.currentPage = 1;
        vm.booksPerPage = 6;
        vm.query = "";
        vm.currentState = $state.current.name;
        $rootScope.currentState = $state.current.name;
        vm.getBooks = getBooks;
        vm.initSearch = initSearch;

        //debugger;
        getBooks();

        function getBooks() {
            //debugger;
            BookService.getBooks(vm.currentPage, vm.query).then(function (data) {
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