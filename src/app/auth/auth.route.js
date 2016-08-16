/**
 * Created by mac on 8/7/16.
 */
(function(){
    'use strict';
    angular.module("app.auth").config(moduleConfig);

    function moduleConfig($stateProvider,$urlRouterProvider){
        //$urlRouterProvider.otherwise("/");
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "app/auth/login.html",
                controller:"AuthController",
                controllerAs:"vm",
            });
    }

})();