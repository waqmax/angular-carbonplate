/**
 * Created by mac on 8/29/16.
 */
(function () {
    'use strict';

    angular.module("app.admin.core")
        .config(moduleRouteConfig);

    function moduleRouteConfig($stateProvider) {
         $stateProvider
            .state('main.admin', {
                url: "/admin",
                templateUrl: "app/admin/core/admin.html",
                controller: 'AdminController',
                controllerAs: 'vm'
            });
    }

})();