(function (angular) {
  "use strict";

  angular.module('app1', [])

  .controller('SssCtrl', function($scope) {
    $scope.address = "Main St.";

    $scope.on = true;

    var boxes = [];
    for(var j=0; j<100; j++) {
      boxes.push({ n: j });
    }
    $scope.boxes = boxes;

    $scope.$watch("address", function(n,o) {
      console.log(" address is now " + n);
    });


  });

})(window.angular);
