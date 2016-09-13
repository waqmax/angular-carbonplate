/**
 * Created by mac on 9/2/16.
 */
(function () {
    'use strict';

    angular.module("app.admin.wishes")
        .config(moduleRouteConfig);

    function moduleRouteConfig($stateProvider) {
         $stateProvider
            .state('main.admin.wishes', {
                url: "/wishes",
                templateUrl: "app/admin/wishes/wishes.html",
                controller: 'WishesController',
                controllerAs: 'vm'
            });
        
    }

})();