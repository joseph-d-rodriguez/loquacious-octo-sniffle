(function (angular) {
  "use strict";

  angular.module("demoApp", [])
    .controller("YellowController", YellowController)
    .service("statefulService", StatefulService)
    .service("dataFeed", DataFeed)
    .controller("AnotherController", AnotherController);

  function YellowController($scope, statefulService) {
    $scope.values = {
      b: 5
    };
    $scope.sharedValues = statefulService.sharedValues;
    $scope.add = function add() {
      var a = parseInt($scope.sharedValues.a);
      var b = parseInt($scope.values.b);
      return a + b;
    };
  }

  function StatefulService() {
    this.sharedValues = {};
  }

  function DataFeed($interval, statefulService, $rootScope) {
    this.start = function() {
      // setInterval(function() {
      //   statefulService.sharedValues.a =
      //   parseInt(statefulService.sharedValues.a) + 1;
      //   $rootScope.$apply();
      // }, 2000);
      $interval(function() {
        statefulService.sharedValues.a =
        parseInt(statefulService.sharedValues.a) + 1;
      }, 2000);
    }
  }

  function AnotherController($scope, dataFeed) {
    $scope.start =  dataFeed.start;
  }

})(window.angular);
