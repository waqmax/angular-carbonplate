(function (){

angular
    .module('app.public.home')
    .config(moduleConfig);

    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.public.home', {
                url: "/home",
                templateUrl: "app/public/home/home.html",
                controller: 'HomeController',
                controllerAs: 'vm'
            }).state('main.public.about', {
                url: "/about",
                templateUrl: "app/public/home/about.html",
                // Perhaps no controllers needed for this page. Leave it be.
            });
    }

})();