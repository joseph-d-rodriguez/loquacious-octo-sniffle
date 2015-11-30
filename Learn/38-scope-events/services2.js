(function (angular) {
  "use strict";

  function SvcShare1Controller($scope, sharedPerson2) {
    $scope.childPerson = sharedPerson2;
  }

  function SvcShare2Controller($scope, sharedPerson2) {
    $scope.person = sharedPerson2;
    $scope.person.name = "John";
  }

  function sharedPerson2() {
    this.name = '';
  }

  angular.module("serviceExample2", [])
    .controller("SvcShare1Controller", SvcShare1Controller)
    .controller("SvcShare2Controller", SvcShare2Controller)
    .service("sharedPerson2", sharedPerson2);

})(window.angular);
