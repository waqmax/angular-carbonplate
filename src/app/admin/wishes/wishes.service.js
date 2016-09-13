/**
 * Created by mac on 9/2/16.
 */
(function () {
    'use strict';

    angular.module('app.admin.wishes')
        .factory('MyWishesService',MyWishesService);

    function MyWishesService(TokenRestangular,AuthService){

        var service = TokenRestangular.service("wishes");

        service.getWishes = getWishes;


        function getWishes(currentPage,query) {
            var currentUserId = AuthService.getCurrentUser() ? AuthService.getCurrentUser().pk : "";
            query = query === undefined ? "" : query;
            return TokenRestangular.all("wishes/?page="+currentPage+"&query="+query+"&user="+currentUserId).customGET('');
        }

        return service;

    }

})();