(function (angular) {
  "use strict";

  angular.module("card", [])
    .directive("cardBlock", function () {
      return {
        restrict: "AEC",
        templateUrl: "card.html",
      };
    })

    .controller("PersonController", function ($scope) {
      $scope.name = "Some Crazy Name Goes Here?";
      $scope.fingers = [1, 2];
    });

})(window.angular);
