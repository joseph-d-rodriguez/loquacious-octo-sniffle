(function (angular) {
  "use strict";

  angular.module('dynafield.select', [])

    .directive('dynafieldSelect', function () {
      return {
        restrict: "E",
        templateUrl: "dynafield/select.html",
        link: selectLink
      }

      function selectLink(scope, element, attrs) {

      }
    });

})(window.angular);
