;(function (angular) {
    angular.module('backpackData', [])

    .controller('BackpackDataController', function($scope, backpackData, $timeout) {
        var that = this;
        that.something = 'a variable for something';

        $timeout(function() {
            backpackData.get().then(function(response) {
                that.backpacks = response.data;
            }).catch(function(response) {
               that.backpacksError = response.status + ': ' + response.data;
            });
        },
        2000);
    })

    .service('backpackData', function getBackpackData($http) {
        var that = this;
        this.get = function(cb) {
            return $http.get('./backpacks.json');
        };
    })

    .directive('displayBackpacks', function() {
        return {
            restrict: 'E',
            templateUrl: './display-backpacks.html'
        };
    });
})(window.angular);