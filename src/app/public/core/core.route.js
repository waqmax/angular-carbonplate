/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.public.core')
        .config(moduleConfig);

    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.public', {
                url: "/public",
                templateUrl: "app/public/core/public.html",
                controller: 'PublicController',
                controllerAs: 'vm'
            });

    }

})();