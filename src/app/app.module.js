/**
 * Created by mac on 8/7/16.
 */
(function () {
   'use strict'
    angular.module('app',['app.core','app.public','app.auth','app.admin','LocalStorageModule'])
        .constant("AppConstants",{
            "localApi":"http://localhost:8000/api",

        })
        .config(moduleLocalStorageConfig)
        .factory("TokenRestangular",TokenRestangular)

        .run(function($rootScope, $location, $state, AuthService) {

            $rootScope.$on('$stateChangeStart', function(e, toState) {

                if(toState.name.indexOf("admin") !== -1)
                    if(!AuthService.isSignedIn()) {
                        e.preventDefault(); // stop current execution
                        $state.go('main.public.signin'); // go to login
                    }
            });
        }).service('authInterceptor', function($q,$rootScope) {
            var service = this;

            service.responseError = function(response) {
                if (response.status == 401){
                    debugger;
                    $rootScope.$broadcast("user:died");
                }
                return $q.reject(response);
            };
        }).config(['$httpProvider', function($httpProvider) {
            $httpProvider.interceptors.push('authInterceptor');
        }]);


    function TokenRestangular(Restangular,AppConstants,localStorageService) {
        return Restangular.withConfig(function (RestangularConfigurer) {
            // Set access token in header.
            if (localStorageService.get("Token")) {
                RestangularConfigurer.setDefaultHeaders({Authorization: 'Token ' + localStorageService.get("Token")});
            }
            RestangularConfigurer.setBaseUrl(AppConstants.localApi);

        });
    }

    function moduleLocalStorageConfig(localStorageServiceProvider){
        var cookieDomain = window.location.hostname == "localhost" ? "" : window.location.hostname;
        localStorageServiceProvider.setStorageCookieDomain(cookieDomain)

         /*
         * Configure whether events should be broadcasted on $rootScope for each of the following actions:
            setItem , default: true, event "LocalStorageModule.notification.setitem"
           removeItem , default: false, event "LocalStorageModule.notification.removeitem"*/
         .setNotify(true, true);

    }


})();