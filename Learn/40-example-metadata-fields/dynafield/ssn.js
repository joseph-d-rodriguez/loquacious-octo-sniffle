(function (angular) {
  "use strict";

  angular.module('dynafield.ssn', ['ui.mask'])
    .directive('dynafieldSsn', function () {
      return {
        restrict: "E",
        templateUrl: "dynafield/ssn.html",
        link: ssnLink
      }

      function ssnLink(scope, element, attrs) {
        // scope.meta = fd[attrs.entity][attrs.field];

      }
    })

})(window.angular);

