/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.core')
        .controller('PublicController', PublicController);

    function PublicController($state,$rootScope,AuthService,CoreService) {
        var vm = this;
        vm.currentState = $state.current.name;
        $rootScope.currentState = $state.current.name;
        vm.isSignedIn = isSignedIn;
        vm.user = AuthService.getCurrentUser();
        vm.signOut = AuthService.signOut;
        vm.visitingAfterSignIn = visitingAfterSignIn;
        vm.genreList = CoreService.genreList;
        vm.languageList = CoreService.bookLanguageList;
        vm.countryList = CoreService.countryList;

        function visitingAfterSignIn() {
            return vm.isSignedIn() && vm.currentState.indexOf(".public.") !== -1;
        }

        function isSignedIn() {
            return AuthService.isSignedIn();
        }


    }

})();