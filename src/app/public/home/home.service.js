
(function(){
    'use strict';

    angular.module("app.public.home")
        .factory("BookService",BookService);

    function BookService(TokenRestangular){

        var service = TokenRestangular.service("books");
        service.getBooks = getBooks;

       function getBooks(currentPage,query){
            //debugger;
           query = query === undefined ? "" : query;
            return TokenRestangular.all("books/?page="+currentPage+"&title="+query).customGET('');
        }

        return service;
    }

})();