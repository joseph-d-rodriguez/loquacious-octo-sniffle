(function (angular) {
  "use strict";

  angular.module('dynafield.text', ['dictionary'])

    .directive('dynafieldText', function (fieldDictionary) {
      return {
        restrict: "E",
        templateUrl: "dynafield/text.html",
        link: textLink
      }

      function textLink(scope, element, attrs) {
      }
    })

})(window.angular);

