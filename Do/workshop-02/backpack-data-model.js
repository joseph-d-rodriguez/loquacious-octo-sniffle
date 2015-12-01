;(function (angular) {
    angular.module('backpackData', [])

    .controller('BackpackDataController', function($scope, backpackData) {
        $scope.something = 'a variable for something';

        backpackData.get().success(function(data) {
            $scope.backpacks = data;
        }).error(function(error) {
           $scope.backpacksError = error;
        });
    })

    .service('backpackData', function getBackpackData($http) {
        var that = this;
        this.get = function(cb) {
            return $http.get('./backpacks.json');
        };
    });
})(window.angular);