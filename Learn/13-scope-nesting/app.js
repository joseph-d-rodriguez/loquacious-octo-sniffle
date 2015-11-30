(function (angular) {
  "use strict";

  function YellowController($scope) {
    $scope.values = {
      a: 3,
      b: 5
    };
    $scope.add = function add() {
      var a = parseInt($scope.values.a);
      var b = parseInt($scope.values.b);
      $scope.total = a + b;
    };
  }

  function OuterController($scope) {
    $scope.first = "John";
    // $scope.name = { first: "John" }; // model ON the scope
  }

  function InnerController($scope) {
    // $scope.name = { first: "JIm" }; // model ON the scope
  }

  angular.module("demoApp", [])
    .controller("YellowController", YellowController)
    .controller("OuterController", OuterController)
    .controller("InnerController", InnerController);

})(window.angular);
