(function (){

angular
    .module('app.public.home')
    .config(moduleConfig);

    function moduleConfig($stateProvider) {
        $stateProvider
            .state('main.public.home', {
                url: "/books",
                templateUrl: "app/public/home/home.html",
                controller: 'HomeController',
                controllerAs: 'vm'
            }).state('main.public.about', {
                url: "/about",
                templateUrl: "app/public/home/about.html",
                // Leave out the next couple of lines if no controller is needed.
                controller: 'AboutUsController',
                controllerAs: 'vm'
            });
    }

})();