(function (angular) {
  "use strict";

  angular.module("math", [])
    .controller("MathController", function ($scope) {
      $scope.add = function (a, b) {
        return parseFloat(a) + parseFloat(b);
      };
    });

})(window.angular);
