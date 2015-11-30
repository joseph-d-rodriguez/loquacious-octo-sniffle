(function (angular) {
  "use strict";

  angular.module('exampleApp', ['ngRoute', 'dynafield', 'dictionary'])
  .config(configRoutes)
  .controller("NavController", NavController)
  .controller("DataEntryController", DataEntryController);

  function configRoutes($routeProvider) {
    $routeProvider
    .when("/welcome", {
      templateUrl: "example/welcome.html",
      nextRoute: '/step1'
    })
    .when("/step1", {
      templateUrl: "example/page1.html",
      prevRoute: '/welcome',
      nextRoute: '/step2'
    })
    .when("/step2", {
      templateUrl: "example/page2.html",
      prevRoute: '/step1',
      nextRoute: '/step3'
    })
    .when("/step3", {
      templateUrl: "example/page3.html",
      prevRoute: '/step2',
      nextRoute: '/thanks'
    })
    .when("/thanks", {
      templateUrl: "example/thanks.html",
      prevRoute: '/step3'
    })
    .otherwise({
      redirectTo: "/welcome"
    });
  }

  function DataEntryController($scope) {
    $scope.applicant = {};
    $scope.qualification = {};
    $scope.reference = {};
  }

  function NavController($scope, $route, $location) {
  	$scope.route = $route;
    $scope.prev = function() {
      $location.path($route.current.prevRoute);
    }
    $scope.next = function() {
      $location.path($route.current.nextRoute);
    }
  }

})(window.angular);
