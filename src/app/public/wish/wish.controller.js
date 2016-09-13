/**
 * Created by mac on 8/25/16.
 */
(function () {
    'use strict';
    
    angular.module('app.public.wish')
        .controller('WishController',WishController);
    
    function WishController($state,$rootScope,WishService){
        var vm = this;
        vm.currentState = $state.current.name;
        $rootScope.currentState = $state.current.name;
        vm.currentPage = 1;
        vm.wishesPerPage = 6;
        vm.query = "";
        vm.getWishes = getWishes;
        vm.initSearch = initSearch;

        getWishes(vm.currentPage,vm.query);
        
        function getWishes(){
            WishService.getWishes(vm.currentPage,vm.query).then(function (data) {
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