/**
 * Created by mac on 9/14/16.
 */
(function () {
    'use strict';
    
    angular.module("app.admin.profile")
        .config(moduleConfig);
    
    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.admin.profile', {
                url: "/profile",
                templateUrl: "app/admin/profile/profile.html",
                controller: 'ProfileController',
                controllerAs: 'vm'
            });
    }
})();