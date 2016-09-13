/**
 * Created by mac on 9/2/16.
 */
(function () {

    angular.module("app.admin.books")
        .factory("MyBooksService",MyBooksService)
        .factory("Books",Books);

    function Books(TokenRestangular){
        var service = TokenRestangular.service("books");
        // I can add custom methods to my Students service
        // by adding functions here service
        service.validateData = function(book) {
           //validate student data
        }

        return service;
    }

    function MyBooksService(TokenRestangular,AuthService,$http,localStorageService) {
        var service = TokenRestangular.service("books");
        service.getBooks = getBooks;
        service.updateBook = updateBook;
        service.getBook = getBook;
        service.getPrices = getPrices;
        service.fetchAuthors = fetchAuthors;
        service.fetchGenres = fetchGenres;

        function getBook(bookId) {
            return TokenRestangular.one("books/"+bookId+"/").customGET('');
        }

        function updateBook(bookId,book){
            return $http({ method: 'PATCH', url: "http://localhost:8000/api/books/"+bookId+"/", data: book, headers: {'Authorization': 'Token '+localStorageService.get("Token")}});
            //return TokenRestangular.all("books/"+bookId+"/").customPATCH(book);
        }

        function getPrices(bookId){
            return TokenRestangular.all("prices/?book="+bookId).customGET('');
        }

        function fetchAuthors(query) {
            query = query === undefined ? "" : query;
            return TokenRestangular.all("authors/?name="+query).customGET('');
        }

        function fetchGenres(query) {
            query = query === undefined ? "" : query;
            return TokenRestangular.all("genres/?query="+query).customGET('');
        }

       function getBooks(currentPage,query){
            //debugger;
           var currentUserId = AuthService.getCurrentUser() ? AuthService.getCurrentUser().pk : "";
            query = query === undefined ? "" : query;
            return TokenRestangular.all("books/?page="+currentPage+"&title="+query+"&user="+currentUserId).customGET('');
        }

        return service;
    }

})();