// Intentional global variable for class experimentation;
// It is also possible to inspect an element and obtain the scope.
var s;

(function (angular) {
  "use strict";

  angular.module('app1', [])

  .controller('TopCtrl', function TopCtrl($scope) {
    $scope.title = function() {
      return "Title Goes Here";
    };


    // $scope.$watch("a+b", function(n,o) {
    //  $scope.total = parseInt($scope.a) + parseInt($scope.b);
    // });

    // $scope.$watch(function() {
    //   return $scope.a + "anything" + $scope.b;
    //  },
    //  function(n,o) {
    //  $scope.total = parseInt($scope.a) + parseInt($scope.b);
    // });

    // $scope.$watch(function() {
    //   return { a: $scope.a, b: $scope.b };
    //  },
    //  function(n,o) {
    //  $scope.total = parseInt($scope.a) + parseInt($scope.b);
    // }, true);

    // $scope.$watch( ... ... , false)
    // $scope.$watchCollection( ... ... )
    // $scope.$watch( ... ... , true)


  })

  .controller('SssCtrl', function($scope) {

    $scope.name = "Joe";
    $scope.address = "Main St.";
    s = $scope;

    $scope.foo = function() {
      $scope.name = "nnnn";
    }

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var i=0;
    $scope.count = function() {
      //console.log("count called");
      // 10 $digest() iterations reached. Aborting!
      console.log("count called", ++i);
      //if(i < 250000) i++;
      return 42;
      //return $scope.address + i;
    }

    $scope.$watch("address", function(n,o) {
      console.log(" address is now " + n);
    });

  });
})(window.angular);
