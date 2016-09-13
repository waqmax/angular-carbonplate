/**
 * Created by mac on 9/2/16.
 */
(function () {
    'use strict';

    angular.module("app.admin.books")
        .controller("BookDetailsController",BookDetailsController);

    function BookDetailsController($state,$rootScope,$stateParams,MyBooksService,Books,CoreService,TokenRestangular) {
        var vm = this;
        vm.currentState = $state.current.name;
        $rootScope.currentState = $state.current.name;
        vm.bookId = $stateParams.bookId;
        vm.getBook = getBook;
        vm.saveBook = saveBook;
        vm.removeBook = removeBook;
        vm.getPrices = getPrices;
        vm.autocompleteAuthors = autocompleteAuthors;
        vm.autocompleteGenres = autocompleteGenres;
        vm.bookConditionList = CoreService.bookConditionList;
        vm.bookStatusList = CoreService.bookStatusList;
        vm.bookLanguageList = CoreService.bookLanguageList;
        vm.currencyList = CoreService.currencyList;
        vm.test = 2;

        vm.getBook(vm.bookId);
        vm.getPrices();

        function getBook2(bookId){
            Books.one(bookId).get().then(function(data){
              vm.book = data;
            });
        }

        function getBook(){

            MyBooksService.getBook(vm.bookId).then(function(data){
               vm.book = data;
                TokenRestangular.setRequestSuffix('');
            },function (error) {
                TokenRestangular.setRequestSuffix('');

            });

        }
        
        function saveBook() {
            delete vm.book["cover_page"];
            MyBooksService.updateBook(vm.bookId,vm.book).then(function (data) {
                vm.book = data.data;

            },function (error) {

            });
        }

        function removeBook(){
            
        }
        
        function autocompleteAuthors(query) {
            return MyBooksService.fetchAuthors(query).then(function (data) {
                return data.results;
            },function (error) {
                return [];
            });
        }

        function autocompleteGenres(query){
            return MyBooksService.fetchGenres(query).then(function (data) {
                return data.results;
            },function (error) {
                return [];
            });
        }

        function getPrices(){
            MyBooksService.getPrices(vm.bookId).then(function(data){
               vm.prices = data.results;
                vm.itemsCount = data.count;
            },function (error) {

            });
        }
    }
    

})();