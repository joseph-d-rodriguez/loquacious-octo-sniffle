(function (angular) {
  "use strict";

  // Add more to the same module; this has nothing to do with routing,
  // it merely shows another variation of how the module system can be used.

  angular.module("BootcampApp")
    .controller("BlueController", function ($scope) {
      $scope.message = "Hello Blue World!";
    })
    .controller("RedController", function ($scope) {
      $scope.message = "Hello Red World!";
    })
    .controller("YellowController", function ($scope) {
      $scope.message = "Hello Yellow World!";
    });

})(window.angular);
