angular.module('freshflesh')
    .controller('RegistrationCtrl', [
        '$scope',
        "$location",
        "authentication",
        function($scope, $location, authentication) {
            $scope.title = 'Registration';

            var vm = this;

            vm.credentials = {
                username: "",
                email: "",
                password: ""
            };

            vm.onSubmit = function() {
                authentication.register(vm.credentials)
                    .error(function(err){
                        alert(err);
                    })
                    .then(function(){
                        $location.path("profile");
                    });
            };
    }]);
