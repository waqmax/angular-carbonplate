
(function(){
    'use strict';

    angular.module("app.public.home")
        .factory("BookService",BookService);

    function BookService(Restangular){

        var service = Restangular.service("books");
        service.getBooks = getBooks;
        service.filterBooks = searchBook;

       function getBooks(currentPage){
            //debugger;
            return Restangular.all("books/?page="+currentPage).customGET('');
        }

        function searchBook(currentPage,query){
            //debugger;
            return Restangular.all("books/?page="+currentPage+"&title="+query).customGET('');
        }


        return service;
    }

})();