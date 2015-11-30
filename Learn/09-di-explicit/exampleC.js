(function(angular) {
  'use strict';

  CController.$inject = ['$scope', '$log', '$timeout', '$interval', '$location'];
  function CController($scope, $log, $timeout, $interval, $location) {
    function writeToLog() {
      $log.info('Hello from C');
    }

    $scope.counter = 100;
    $scope.url = 'C: ' + $location.absUrl();

    function incCounter() {
      $scope.counter++;
    }

    $timeout(writeToLog, 1000);
    $interval(incCounter, 400);
  }

  angular.module('exampleC', [])
    .controller('CController', CController);

})(window.angular);
