(function (angular) {
  "use strict";

  angular.module("addressEntry", ["clickEdit"])
    .directive("addressEntry", function () {

      return { // DDO = Directive Definition Object
        restrict: "E", // Recommended for component directives.
        templateUrl: "components/addressEntry/addressEntry.html",
        scope: {
          label: "@",
          address: "=addr"
        }
      }
    });

})(window.angular);
