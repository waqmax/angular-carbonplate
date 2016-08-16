(function (){
    'use strict'

    angular
        .module('app.core')
        .controller('MainController', MainController);

    function MainController($state,$rootScope) {
        var vm = this;
        vm.currentState = $state.current.name;
        debugger;
    }

})();