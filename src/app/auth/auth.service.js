/**
 * Created by mac on 8/7/16.
 */
(function(){
    'use strict';
    angular.module("app.auth").factory("AuthService",AuthService);
    angular.module("app.auth").factory("RootRestangular",RootRestangular);

    function AuthService(RootRestangular,TokenRestangular,localStorageService,$state,$rootScope,$q) {
        var service = RootRestangular.service();
        service.requestToken = requestToken;
        service.setToken = setToken;
        service.isSignedIn = isSignedIn;
        service.setCurrentUser = setCurrentUser;
        service.getCurrentUser = getCurrentUser;
        service.fetchCurrentUser = fetchCurrentUser;


        service.signOut = signOut;


        $rootScope.$on("user:died",function(event,data){
            event.stopPropagation();
            service.signOut();
        });


        function signOut() {
            localStorageService.remove("Token");
            localStorageService.remove("user");
            TokenRestangular.setDefaultHeaders({});
            $state.go("main.public.signin");
        }


        function setToken(value) {
            localStorageService.set("Token",value);
        }

        function fetchCurrentUser() {
            return TokenRestangular.one("users/me/").customGET('');
        }

        function setCurrentUser(user) {
            localStorageService.set("user",user);
            $rootScope.$broadcast('user:updated',user);
        }

        function getCurrentUser() {
            return localStorageService.get("user");
        }

        function isSignedIn() {
            return localStorageService.get("Token") != undefined && localStorageService.get("user") != undefined;
        }

        function requestToken(credentials) {
            return RootRestangular.all('api-token-auth/').customPOST(credentials);
        }

        return service;
    }

    function RootRestangular(Restangular) {
      return Restangular.withConfig(function(RestangularConfigurer) {
          var newBaseUrl = "";
            if (window.location.hostname == "localhost") {
                newBaseUrl = "http://localhost:8000/";
             }
             else {
                var deployedAt = window.location.href.substring(0, window.location.href);
                newBaseUrl = deployedAt + "/";
             }
            RestangularConfigurer.setBaseUrl(newBaseUrl);

      });
    }

})();