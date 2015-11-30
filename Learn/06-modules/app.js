(function (angular) {
  "use strict";

  // module with [] declares a module and its dependencies.
  // Does the order matter? Yes, if there is a conflict.
  angular.module("myApp", ['person', 'wrapper', 'card', 'math']);

})(window.angular);
