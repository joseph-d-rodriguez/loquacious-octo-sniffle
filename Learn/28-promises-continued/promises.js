(function (angular) {
  "use strict";

  angular.module('promisesApp', ['promise_utils'])
    .controller('MyController', MyController)
    .service("Colors", Colors);

  // Misc utility functions Angular won't care about:
  function extractData(v) {
    return v.data;
  }

  function extractLength(v) {
    return v.length;
  }

  // Service implemented as a standalone constructor fn:
  function Colors($http) {
    this.get = function() {
      return $http.get("../demo-data/colors.json")
        .then(extractData).then(extractLength);
    }
  }

  // Controllers implemented as a standalone constructor fn:
  function MyController($q, $scope, Colors, promiseSleep) {

    // Another way to create a promise
    var p1 = $q(function(resolve, reject) {
      $scope.go1 = function() {
        resolve(1);
      };
      $scope.stop = function() {
        reject("oops");
      };
    });

    // Yet another way to create a promise:
    var p4 = $q.when(5875);

    var colorsPromise = Colors.get().then(promiseSleep(5000));

    $q.all([p1, colorsPromise, p4]).then(function(answers) {
      $scope.message = "The answers are: "+ answers[0] +
        "," + answers[1] +
        "," + answers[2];
    }).catch(function(e) {
      $scope.oops = e;
    });

  }

})(window.angular);
