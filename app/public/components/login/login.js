angular.module('freshflesh')
    .controller('LoginCtrl', [
        '$scope',
        function($scope) {
          $scope.test = 'Please login!';
        },
        function($location, authentication) {
            var vm = this;

            vm.credentials = {
                username: "",
                password: ""
            };

            vm.onSubmit = function(){
                authentication.login(vm.credentials)
                    .error(function(err){
                        alert(err);
                    })
                    .then(function(){
                        $location.path("profile");
                    });
            };
        }
    ]);
