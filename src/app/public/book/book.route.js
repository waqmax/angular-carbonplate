/**
 * Created by mac on 8/21/16.
 */
(function () {
    'use strict';
    
    angular.module("app.public.book").config(moduleConfig);
    
    function moduleConfig($stateProvider){
        $stateProvider
            .state('main.public.book',{
               url:"/book/{bookId}",
               templateUrl:"app/public/book/book.html",
               controller:"BookController",
                controllerAs:"vm"
            });
    }
})();