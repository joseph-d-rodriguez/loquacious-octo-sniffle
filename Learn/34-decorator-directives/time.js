(function (angular) {
  "use strict";

  angular.module("time", [])
    .directive('myCurrentTime', function ($interval, dateFilter) {

      function timeLink(scope, element, attrs) {  // Not DI
        var format,
          intervalId;
        function updateTime() {
          // DOM manipulation
          element.text(dateFilter(new Date(), format));
        }
        scope.$watch(attrs.myCurrentTime, function (value) {
          format = value;
          updateTime();
        });
        // start the UI update process;
        // save the ID for cleanup
        intervalId = $interval(updateTime, 1000);

        // We are responsible for cleaning up globals,
        // like a timeout.
        element.on('$destroy', function () {
          $interval.cancel(intervalId);
        });
      }

      return {
        restrict: "A",
        link: timeLink
      };
    });

})(window.angular);
