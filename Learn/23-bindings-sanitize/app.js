(function (angular) {
  "use strict";

  function DemoController($scope, $sce) {
    $scope.unsafeHtml = '<a onmouseover="this.textContent=\'Executing potentially dangerous code!\'" href="http://angularbootcamp.com">Angular Bootcamp</a>';
    $scope.trustedHtml = $sce.trustAsHtml($scope.unsafeHtml);
  }

  // We get $sanitize applied to ng-bind-html just by including the ngSanitize module
  angular.module('app', ['ngSanitize'])
    .controller('DemoController', DemoController);

})(window.angular);
