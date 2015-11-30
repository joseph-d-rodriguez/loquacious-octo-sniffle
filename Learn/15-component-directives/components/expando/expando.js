(function (angular) {
  "use strict";

  angular.module("expando", [])

    .directive("expando", function () {
      return {
        restrict: "E",
        templateUrl: "components/expando/expando.html",
        transclude: true,
        scope: {
          heading: "@"
        }
      }
    })

})(window.angular);
