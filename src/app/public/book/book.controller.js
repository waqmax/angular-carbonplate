/**
 * Created by mac on 8/21/16.
 */
(function () {
    'use strict';
    angular.module("app.public.book")
        .controller("BookController",BookController);

    function BookController($state,BookDetailService,$stateParams,$rootScope) {
        var vm = this;
        vm.currentState = $state.current.name;
        $rootScope.currentState = $state.current.name;
        vm.getBook = getBook;
        vm.getPrices = getPrices;
        vm.bookId = $stateParams.bookId;

        getBook();
        getPrices();

        function getBook(){
            BookDetailService.getBook(vm.bookId).then(function(data){
               vm.book = data;
                debugger;
            },function (error) {

            });
        }

        function getPrices(){
            BookDetailService.getPrices(vm.bookId).then(function(data){
               vm.prices = data.results;
                vm.itemsCount = data.count;
            },function (error) {

            });
        }
    }
})();