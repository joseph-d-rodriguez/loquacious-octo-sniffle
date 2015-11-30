(function (angular) {
  "use strict";

  angular.module("wrapper", [])
    .directive("wrapper", function () {
      return {
        restrict: "E",
        transclude: true,
        templateUrl: "wrapper.html",
      };
    });

})(window.angular);
