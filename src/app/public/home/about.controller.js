/**
 * Created by mac on 9/12/16.
 */
(function () {
    'use strict';

    angular.module("app.public.home")
        .controller("AboutUsController",AboutUsController);

    function AboutUsController($state,$rootScope) {
        var vm = this;
          vm.currentState = $state.current.name;
          $rootScope.currentState = $state.current.name;
    }

})();