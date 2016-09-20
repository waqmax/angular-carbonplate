/**
 * Created by mac on 8/29/16.
 */
(function () {
    'use strict';

    angular.module("app.admin.core")
        .controller("AdminController",AdminController);

    function AdminController(AuthService,$state,$rootScope,CoreService,$scope){
        var vm = this;
        vm.currentState = $state.current.name;
        $rootScope.currentState = $state.current.name;
        vm.user = AuthService.getCurrentUser();
        vm.isSignedIn = AuthService.isSignedIn;
        vm.signOut = AuthService.signOut;
        vm.genreList = CoreService.genreList;
        vm.languageList = CoreService.bookLanguageList;
        vm.countryList = CoreService.countryList;
        vm.bookStatusList = CoreService.bookStatusList;
        vm.bookConditionList = CoreService.bookConditionList;

        $scope.$on('user:updated',updateThisUser);
        
        function updateThisUser() {
            vm.user = AuthService.getCurrentUser();
        }

    }
    
})();