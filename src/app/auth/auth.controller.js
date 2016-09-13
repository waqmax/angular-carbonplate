/**
 * Created by mac on 8/7/16.
 */
(function(){
    'use strict';
    angular.module("app.auth")
        .controller("AuthController",AuthController);

    function AuthController($state,$rootScope,AuthService,localStorageService,$location,TokenRestangular) {
        var vm = this;
        vm.currentState = $state.current.name;
        $rootScope.currentState = $state.current.name;
        vm.username = "";
        vm.password = "";
        vm.submitCredentials = submitCredentials;
        vm.errors = "";

        function submitCredentials() {
            var credentials = {"username":vm.username,"password":vm.password};
            //debugger;
            AuthService.requestToken(credentials).then(function (data) {
                AuthService.setToken(data.token);
                TokenRestangular.setDefaultHeaders({Authorization:"Token "+localStorageService.get("Token")});
                AuthService.fetchCurrentUser().then(function (user) {
                    AuthService.setCurrentUser(user);
                    $state.go("main.admin.books");

                },function (error) {
                   //Failed to fetch user after authentication
                    //How can this even happen..? smh
                });


            },function (error) {
                vm.errors = error.data;
            });
        }
    }

    
})();