(function(angular) {
  'use strict';

  angular.module('exampleA', [])
    .controller('AController', ['$scope', '$log', '$timeout', '$interval', '$location',
      function ($scope, $log, $timeout, $interval, $location) {
        function writeToLog() {
          $log.info('Hello from A');
        }

        $scope.counter = 1;
        $scope.url = 'A: ' + $location.absUrl();

        function incCounter() {
          $scope.counter++;
        }

        $timeout(writeToLog, 1000);
        $interval(incCounter, 400);
      }
    ]);

})(window.angular);
