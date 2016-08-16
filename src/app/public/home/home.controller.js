/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.home')
        .controller('HomeController', HomeController);

    function HomeController($state) {
        var vm = this;
        vm.currentState = $state.current.name;
        debugger;
        
        
    }

})();