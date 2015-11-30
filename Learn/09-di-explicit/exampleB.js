(function(angular) {
  'use strict';

  function BController($scope, $log, $timeout, $interval, $location) {
    function writeToLog() {
      $log.info('Hello From B');
    }

    $scope.counter = 10;
    $scope.url = 'B: ' + $location.absUrl();

    function incCounter() {
      $scope.counter++;
    }

    $timeout(writeToLog, 1000);
    $interval(incCounter, 400);
  }

  angular.module('exampleB', [])
    .controller('BController', ['$scope', '$log', '$timeout', '$interval', '$location', BController]);

})(window.angular);
