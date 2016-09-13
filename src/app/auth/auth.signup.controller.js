/**
 * Created by mac on 8/7/16.
 */
(function(){
    'use strict';
    angular.module("app.auth")
        .controller("SignupController",SignupController);

    function SignupController($state,$rootScope){
        var vm = this;
        vm.currentState = $state.current.name;
        $rootScope.currentState = $state.current.name;
    }
    
})();
