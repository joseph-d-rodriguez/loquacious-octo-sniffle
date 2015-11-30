(function (angular) {
  "use strict";

  angular.module('dynafield.phone', [])

    .directive('dynafieldPhone', function (fieldDictionary) {
      return {
        restrict: "E",
        templateUrl: "dynafield/phone.html",
        link: phoneLink
      }

      function phoneLink(scope, element, attrs) {
      }
    });

})(window.angular);
