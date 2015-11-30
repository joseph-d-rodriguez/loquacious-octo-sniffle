(function (angular) {
  "use strict";

  angular.module('dynafield.email', [])

    .directive('dynafieldEmail', function (fieldDictionary) {
      return {
        restrict: "E",
        templateUrl: "dynafield/email.html",
        link: emailLink
      }

      function emailLink(scope, element, attrs) {
      }
    })

})(window.angular);
