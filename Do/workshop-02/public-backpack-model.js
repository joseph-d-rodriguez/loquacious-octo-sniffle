;(function(angular) {
    angular.module('publicBackpacks', [])

    .controller('PublicBackpackController', function($scope) {

    })

    .directive('publicBackpacks', function() {
        return {
            restrict: "E",
            templateUrl: "public-backpacks.html"
        }
    });
})(window.angular);