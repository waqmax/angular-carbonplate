/**
 * Created by mac on 9/2/16.
 */
(function () {
    'use strict';

    angular.module("app.admin.books")
        .config(moduleRouteConfig);

    function moduleRouteConfig($stateProvider) {
         $stateProvider
            .state('main.admin.books', {
                url: "/books",
                templateUrl: "app/admin/books/books.html",
                controller: 'BooksController',
                controllerAs: 'vm'
            }).state('main.admin.book', {
                url: "/book/{bookId}",
                templateUrl: "app/admin/books/bookDetails.html",
                controller: 'BookDetailsController',
                controllerAs: 'vm'
            }).state('main.admin.addbook', {
                url: "/addbook",
                templateUrl: "app/admin/books/addBook.html",
                controller: 'AddBookController',
                controllerAs: 'vm'
            });
    }

})();