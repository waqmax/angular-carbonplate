/**
 * Created by mac on 8/25/16.
 */
(function () {
    'use strict';
    
    angular.module('app.public.wish')
        .factory('WishService',WishService);
    
    function WishService(TokenRestangular){

        var service = TokenRestangular.service("wishes");

        service.getWishes = getWishes;


        function getWishes(currentPage,query) {
            query = query === undefined ? "" : query;
            return TokenRestangular.all("wishes/?page="+currentPage+"&query="+query).customGET('');
        }

        return service;

    }
    
})();