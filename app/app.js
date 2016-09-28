var app = angular.module("freshflesh", ["ui.router"]);

app.config([
    "$stateProvider",
    "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "public/components/home/home.html",
                controller: "HomeCtrl"
            })
            .state("about", {
                url: "/about",
                templateUrl: "/public/components/about/about.html",
                controller: "AboutCtrl"
            })
            .state("login", {
                url: "/login",
                templateUrl: "/public/components/login/login.html",
                controller: "LoginCtrl"
            })
            .state("registration", {
                url: "/registration",
                templateUrl: "/public/components/registration/registration.html",
                controller: "RegistrationCtrl"
            });

        $urlRouterProvider.otherwise("home");
    }
]);
