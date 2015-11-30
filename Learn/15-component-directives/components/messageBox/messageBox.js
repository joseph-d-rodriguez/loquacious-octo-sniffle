(function (angular) {
  "use strict";

  angular.module("messageBox", [])

    .directive("messageBox", function () {
      // message-box
      return {
        restrict: "E",
        templateUrl: "components/messageBox/messageBox.html",
        scope: {
          "message": "@msg"
        }
      }
    })

})(window.angular);
