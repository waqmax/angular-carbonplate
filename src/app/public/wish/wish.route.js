/**
 * Created by mac on 8/25/16.
 */
(function () {
    'use strict';

    angular.module('app.public.wish')
        .config(moduleConfig);

    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.public.wish', {
                url: "/wish",
                templateUrl: "app/public/wish/wish.html",
                controller: 'WishController',
                controllerAs: 'vm'
            });
    }

})();