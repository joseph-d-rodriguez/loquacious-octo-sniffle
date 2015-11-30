;(function(angular) {
    var myApp = angular.module('myAngularModule', [])

        .controller('MyAngularModuleController', function($scope) {
            // Empty controllers should work
            $scope.domain = 'backpacks';
            $scope.backpacks = [
                {
                    "brand": "Jansport",
                    "model": "the normal"
                },
                {
                    "brand": "boreas",
                    "model": "Bolinas",
                    "category": "Super Tramp",
                    "colors": [
                        "Eclipse Black",
                        "Marina Blue",
                        "Monterey Grey",
                        "Truckee Green"
                    ]
                }
            ];
        })

        .directive('staticText', function() {
            return {
                restrict: "AEC",
                templateUrl: "static.html",
                transclude: true
            }
        });

    console.log('myApp: ', myApp);
})(window.angular);