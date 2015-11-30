(function (angular) {
  "use strict";

  // This controller will be overwritten

  angular.module("person", [])
    .controller("PersonController", function ($scope) {
      $scope.name = "Jim";
      $scope.fingers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    });

})(window.angular);
