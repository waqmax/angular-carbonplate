/**
 * Created by mac on 9/2/16.
 */
(function () {
    'use strict';

    angular.module('app.admin.wishes')
        .controller('WishesController',WishesController);

    function WishesController($state,$rootScope,MyWishesService){
        var vm = this;
        vm.currentState = $state.current.name;
        $rootScope.currentState = $state.current.name;
        vm.currentPage = 1;
        vm.wishesPerPage = 6;
        vm.query = "";
        vm.getWishes = getWishes;
        vm.initSearch = initSearch;

        getWishes();

        function getWishes(){
            MyWishesService.getWishes(vm.currentPage,vm.query).then(function (data) {
                vm.wishes = data.results;
                vm.itemsCount = data.count;
            },function (error) {

            });
        }

        function initSearch(){
            vm.currentPage = 1;
            vm.getWishes();
            //debugger;
        }

    }

})();