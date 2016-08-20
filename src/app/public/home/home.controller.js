/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.home')
        .controller('HomeController', HomeController);

    function HomeController($state,BookService) {
        var vm = this;
        vm.currentPage = 1;
        vm.query = "";
        vm.currentState = $state.current.name;
        vm.getBooks = getBooks;
        vm.searchBook = searchBook;
        vm.initSearch = initSearch;


        getBooks();

        function getBooks(){
            //debugger;
            BookService.getBooks(vm.currentPage).then(function(data){
                vm.books = data.results;
                vm.itemsCount = data.count;

                //debugger;
            },function(error){
                debugger;
            });
        }

        function initSearch(){
            vm.currentPage = 1;
            vm.searchBook();
            debugger;
        }

        function searchBook(){
            BookService.filterBooks(vm.currentPage,vm.query).then(function(data){
               vm.books = data.results;
                vm.itemsCount = data.count;
                debugger;
            },function(error){
                debugger;
            });
        }

        // BookService.one(1).get().then(function(data){
        //    alert(data.title);
        // });
        
    }

})();