/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.core')
        .config(moduleConfig);

    function moduleConfig($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/main/public/home");
        $stateProvider
            .state('main', {
                url: "/main",
                templateUrl: "app/core/main.html",
                controller: 'MainController',
                controllerAs: 'vm'
            });


    }
})();