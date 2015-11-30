(function (angular) {
  "use strict";

  angular.module('promise_utils', [])
    .factory("promiseSleep", function ($timeout) {
      return function (ms) {
        return function (value) {
          return $timeout(function () {
            return value;
          }, ms);
        };
      };
    });

})(window.angular);
