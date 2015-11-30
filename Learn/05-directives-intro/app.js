(function (angular) {
  // IIFE = Immediately Invoked Function Expression
  "use strict";

  angular.module("myApp", [])

    .directive("cardBlock", function (/* could do DI */) {
      return {
        restrict: "AEC",  // Attribute, Element, Class
        templateUrl: "card.html"
      };
    })

    .directive("wrapper", function () {
      return {
        restrict: "E",
        transclude: true,
        templateUrl: "wrapper.html",
      };
    })

    .controller("MainController", function ($scope) {
      // It's OK to do nothing in a controller.
    });

})(window.angular);
