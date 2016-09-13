/**
 * Created by mac on 9/12/16.
 */
(function () {
    'use strict';

    angular.module("app.admin.books")
        .controller("AddBookController",AddBookController);

    function AddBookController($state,$rootScope,CoreService) {
        var vm = this;
        vm.currentState = $state.current.name;
        $rootScope.currentState = $state.current.name;
        vm.bookConditionList = CoreService.bookConditionList;
        vm.bookStatusList = CoreService.bookStatusList;
        vm.bookLanguageList = CoreService.bookLanguageList;
        vm.currencyList = CoreService.currencyList;
        vm.book = {};
    }

})();