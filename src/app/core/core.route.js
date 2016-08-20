/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.core')
        .config(moduleConfig);

    function moduleConfig($stateProvider,$urlRouterProvider,RestangularProvider) {
        $urlRouterProvider.otherwise("/main/public/home");
        $stateProvider
            .state('main', {
                url: "/main",
                templateUrl: "app/core/main.html",
                controller: 'MainController',
                controllerAs: 'vm'
            });

         var newBaseUrl = "";
         if (window.location.hostname == "localhost") {
            newBaseUrl = "http://localhost:8000/api/";
         }
         else {
            var deployedAt = window.location.href.substring(0, window.location.href);
            newBaseUrl = deployedAt + "/api/rest/register";
         }
         RestangularProvider.setBaseUrl(newBaseUrl);


        // RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
        //   var extractedData;
        //   // .. to look for getList operations
        //   if (operation === "getList") {
        //     // .. and handle the data and meta data
        //     extractedData = data.results;
        //     extractedData.count = data.count;
        //     extractedData.next = data.next;
        //     extractedData.previous = data.previous;
        //   } else {
        //     extractedData = data;
        //   }
        //   return extractedData;
        // });
}

})();