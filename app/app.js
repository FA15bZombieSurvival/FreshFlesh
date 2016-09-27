var app = angular.module("freshflesh", ["ui.router"]);

app.config([
    "$stateProvider",
    "$urlRouterProvider",
    ($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise("home");

        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "/public/components/home/home.html",
                controller: "HomeCtrl"
            })
    }
])
