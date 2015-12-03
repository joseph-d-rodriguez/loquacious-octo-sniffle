;(function(angular) {
    "use strict";

    angular.module('routingWorkshopModule', ['ngRoute'])

        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'welcome.html',
                    controller: 'WelcomeController as ctrl'
                })
                .when('/page1', {
                    templateUrl: 'page1.html'
                })
                .when('/page2', {
                    templateUrl: 'page2.html'
                })
                .otherwise({
                    //templateUrl: '404.html'
                    redirectTo: '/'
                })
                .when('/backpacks', {
                    templateUrl: './backpacks.html'
                })
                .when('/backpacks/:id', {
                    templateUrl: './backpack-details.html',
                    controller: 'BackpackDetailsController as ctrl'
                })
            ;
        })

        .controller('WelcomeController', function(userService) {
            this.user = userService;
        })

        .controller('HelloController', function(userService) {
            this.user = userService;
        })

        .service('userService', function userServiceConstructor() {
            this.name = "please enter your name";
            this.email = "please enter your email";
            this.notes = "";
        })

        .directive('routingNav', function() {
            return {
                restrict: 'E',
                templateUrl: './nav.html'
            }
        })

        .directive('hello', function(userService) {
            return {
                restrict: 'E',
                templateUrl: './hello.html',
                controller: function helloDirectiveConstructor() {
                    this.user = userService;
                },
                controllerAs: 'ctrl'
            }
        })

        .service('backpacksService', function backpacksServiceConstructor($http, $timeout, $q) {
            this.get = function backpacksServiceGet() {
                var deferred = $q.defer();

                // return slowly (aka after 2 seconds)
                $timeout(function() {
                    deferred.resolve($http.get('./backpacks.json'));
                },
                2000);

                return deferred.promise;
                //return $http.get('./backpacks.json');
            }
        })

        .controller('BackpacksTableController', function backpacksTableControllerConstructor(backpacksService) {
            var that = this;
            that.backpacks = {};

            backpacksService.get()
                .then(function(response) {
                    that.backpacks.data = response.data;
                })
                .catch(function(response) {
                    that.backpacks.error = response.data;
                })
            ;
        })

        .directive('backpacksTable', function() {
            return {
                restrict: 'E',
                templateUrl: './backpacks-table.html',
                controller: 'BackpacksTableController',
                controllerAs: 'ctrl'
            }
        })

        .controller('BackpackDetailsController', function BackpackDetailsControllerConstructor($routeParams, backpacksService) {
            var that = this;
            this.backpackId = $routeParams.id;

            backpacksService.get()
                .then(function(response) {
                    response.data.forEach(function(bp) {
                        if (bp.id == that.backpackId) {
                            that.backpack = bp;
                        }
                    });
                    console.log('backpack (%s) found: %j', that.backpackId, that.backpack);
                })
                .catch(function(response) {
                    console.log(response.data);
                })
            ;
        })
    ;
})(window.angular);