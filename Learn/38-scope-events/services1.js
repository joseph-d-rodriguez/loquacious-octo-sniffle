(function (angular) {
  "use strict";

  function SvcWatchController($scope, sharedPerson1) {
    function getName() {
      return sharedPerson1.name;
    }

    $scope.$watch(getName, function(newVal) {
      $scope.childName = newVal;
    });
  }

  function SvcUpdateController($scope, sharedPerson1) {
    $scope.name = "John";
    $scope.changeName = function () {
      sharedPerson1.name = $scope.name;
    };
  }

  function sharedPerson1() {
      this.name = '';
    }

  angular.module("serviceExample1", [])
    .controller("SvcWatchController", SvcWatchController)
    .controller("SvcUpdateController", SvcUpdateController)
    .service("sharedPerson1", sharedPerson1);

})(window.angular);
