/**
 * Created by mac on 9/14/16.
 */
(function () {
    'use strict';

    angular.module("app.admin.profile")
        .controller("ProfileController",ProfileController);

    function ProfileController($state,$rootScope,ProfileService,CoreService,$scope,AuthService){
        var vm = this;
        vm.currentState = $state.current.name;
        $rootScope.currentState = $state.current.name;
        vm.user = null;
        vm.countryList = CoreService.countryList;
        vm.getMe = getMe;
        vm.updateMe = updateMe;
        vm.alert = {};
        vm.closeAlert = closeAlert;


        getMe();

        function closeAlert() {
            vm.alert = {};
        }
        
        function getMe() {
            ProfileService.getCurrentUser().then(function (data) {
                vm.user = data;
            },function (error) {

            });
        }

        function updateMe() {
            var picture = $scope.form.file.$valid && $scope.file ? $scope.file : null;
            delete vm.user.books;
            ProfileService.updateCurrentUser(vm.user,picture).then(function (data) {
                vm.user = data.data;
                AuthService.setCurrentUser(vm.user);
                vm.alert = { type: 'success', msg: 'Yass! You have successfully updated your profile.' };
            },function (error) {
                vm.alert = { type: 'warning', msg: error.data };
            });
        }
    }

})();