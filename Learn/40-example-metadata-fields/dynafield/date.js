(function (angular) {
  "use strict";

  angular.module('dynafield.date', ['ui.bootstrap.datepicker', 'ui.bootstrap.tpls'])

    .directive('dynafieldDate', function (fieldDictionary) {
      return {
        restrict: "E",
        templateUrl: "dynafield/date.html",
        link: dateLink
      }

      function dateLink(scope, element, attrs) {
        // scope.meta = fd[attrs.entity][attrs.field];
      }
    })

})(window.angular);

