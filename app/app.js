var app = angular.module("freshflesh", ["ui.router"]);

app.config([
    "$stateProvider",
    "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
        .state('root',{
          url: '',
          views: {
            'navigation': {
              templateUrl: 'public/components/navigation/navigation.html',
              controller: 'NavigationCtrl'
            },
            'footer':{
              templateUrl: 'public/components/footer/footer.html',
              controller: 'FooterCtrl'
            }
          }
        })
        .state('root.home', {
          url: '/home',
          views: {
              "content@": {
                  templateUrl: 'public/components/home/home.html',
                  controller: "HomeCtrl"
              }
          }
        })
        .state("root.about", {
            url: "/about",
            views: {
                "content@": {
                    templateUrl: 'public/components/about/about.html',
                    controller: "AboutCtrl"
                }
            }
        })
        .state("root.login", {
            url: "/login",
            views: {
                "content@": {
                    templateUrl: 'public/components/login/login.html',
                    controller: "LoginCtrl"
                }
            }
        })
        .state("root.registration", {
            url: "/registration",
            views: {
                "content@": {
                    templateUrl: 'public/components/registration/registration.html',
                    controller: "RegistrationCtrl"
                }
            }
        });

        $urlRouterProvider.otherwise("home");
    }
]);
