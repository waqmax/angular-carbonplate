/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular.module('app.core').config(moduleRouteConfig);
    
    function moduleRouteConfig($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/main/public/books");
        $stateProvider
            .state('main', {
                url: "/main",
                templateUrl: "app/core/main.html",
                controller: 'MainController',
                controllerAs: 'vm'
            });
    }

})();