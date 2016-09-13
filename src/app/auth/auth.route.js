/**
 * Created by mac on 8/7/16.
 */
(function(){
    'use strict';
    angular.module("app.auth").config(moduleConfig);

    function moduleConfig($stateProvider,$urlRouterProvider){
        //$urlRouterProvider.otherwise("/");
        $stateProvider
            .state("main.public.signin",{
               url:"/signin",
                templateUrl: "app/public/core/signin.html",
                controller:"AuthController",
                controllerAs: "vm"
            }).state("main.public.signup",{
               url:"/signup",
                templateUrl: "app/public/core/signup.html",
                controller:"SignupController",
                controllerAs: "vm"
            });
    }
})();