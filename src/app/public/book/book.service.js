/**
 * Created by mac on 8/21/16.
 */
(function () {
    'use strict';
    
    angular.module("app.public.book")
        .factory("BookDetailService",BookDetailService);
    
    function BookDetailService(TokenRestangular) {
        var service = TokenRestangular.service("books");

        service.getBook = getBook;
        service.getPrices = getPrices;

        function getBook(bookId) {
             return TokenRestangular.one("books/"+bookId+"/").customGET('');
        }

        function getPrices(bookId){
            return TokenRestangular.all("prices/?book="+bookId).customGET('');
        }
        
        
        return service;
    }
    
})();