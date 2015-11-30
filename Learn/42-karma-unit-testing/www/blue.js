angular.module("blue", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
            .when("/blue", {
                templateUrl: "/blue/blue.html",
                controller: "BlueController"
            })
    })
    .controller("BlueController", function($scope) {
        $scope.name = {
            first: "John",
            last: "Baur"
        };
        $scope.fullName = function fullName() {
//            console.log("Full name called");
            return $scope.name.first + " " + $scope.name.last;
        };
        var x = 12;
        $scope.twelve = function twelve() {
//            console.log("12 called");
//            return x++;
        };

        $scope.$watch("name", function(n, o) {
            console.log(n);
        }, true);
    });
