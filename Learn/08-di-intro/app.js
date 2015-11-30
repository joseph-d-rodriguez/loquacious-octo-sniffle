(function (angular) {
  "use strict";

  // What happens when we rearrange the dependencies?
  function InjectionController($scope, $log, $timeout, $interval, $location) {
    function writeToLog() {
      $log.info('Hello World');
    }

    $scope.counter = 1;
    $scope.url = $location.absUrl();

    function incCounter() {
      $scope.counter++;
    }

    $timeout(writeToLog, 1000);
    $interval(incCounter, 400);
  }

  angular.module('app', [])
    .controller('InjectionController', InjectionController)

})(window.angular);
