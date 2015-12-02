;(function(angular) {
    angular.module('backpacks', [])

    .service('backpacksService', function backpacksServiceConstructor($http) {
        this.get = function() { return $http.get('./components/backpacks/backpacks.json'); };
    })

    .factory('backpacksFactory', function backpacksFactoryConstructor($http) {
        return $http.get('./components/backpacks/backpacks.json');
    })

    .controller('BackpacksController', function(backpacksService, backpacksFactory) {
        var that = this;

        // Instantiate backpacks base object
        that.backpacks = {};

        // Load backpack json data.
        //backpacksService.get()
        backpacksFactory
            .then(function(response) {
                that.backpacks.data = response.data;
            })
            .catch(function(errorResponse) {
                that.backpacks.error = response.data;
            })
        ;
    })

    .directive('backpacksTag', function() {
        return {
            restrict: 'E',
            templateUrl: './components/backpacks/backpacks.html',
            controller: 'BackpacksController',
            controllerAs: 'bpDirectiveCtrl',
            scope: {},
            bindToController: {
                superAwesomeStuffCopy: "=param"
            }
        }
    });
})(window.angular);