(function (angular) {
  "use strict";

  angular.module('dynafield.zip', [])

    .directive('dynafieldZip', function (fieldDictionary) {
      return {
        restrict: "E",
        templateUrl: "dynafield/zip.html",
        link: zipLink
      }

      function zipLink(scope, element, attrs) {
      }
    });

})(window.angular);
