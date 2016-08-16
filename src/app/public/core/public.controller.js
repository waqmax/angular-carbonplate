/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.core')
        .controller('PublicController', PublicController);

    function PublicController($state,$rootScope) {
        var vm = this;
        vm.currentState = $state.current.name;
        // debugger;

        // vm.signOut = signOut;
        //
        // function signOut(){
        //     debugger;
        //     AuthService.signOut().then(function(response){
        //         debugger;
        //     });
        // }


    }

})();