(function (angular) {
  "use strict";

  function ListenerController($scope) {
    $scope.$on("nameChange", function (event, newName) {
      // This can cause trouble in some IEs
      console.log(event);
      $scope.childName = newName;
    });
  }

  function BroadcastController($scope) {
    $scope.name = "John";
    $scope.changeName = function () {
      $scope.$emit("nameChange", $scope.name);
    };
  }

  angular.module("exampleApp", ["serviceExample1", "serviceExample2"])
    .controller("ListenerController", ListenerController)
    .controller("BroadcastController", BroadcastController);

})(window.angular);

