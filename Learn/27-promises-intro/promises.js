(function (angular) {
  "use strict";

  angular.module('promisesModule', [])
    .controller('PromiseController', PromiseController);

  function PromiseController($q, $scope, $http) {

    /*
    var d1 = $q.defer();
    var p1 = d1.promise;

    d1.resolve(42);
    d1.reject("oops");

    p1.then(function(c) {
      console.log("one", c);
    });
    p1.then(function(c) {
      console.log("two", c);
    });
    p1.catch(function(e) {
      console.error(e);
    });
    */

    var d1 = $q.defer();
    var p1 = d1.promise;

    var d2 = $q.defer();
    var p2 = d2.promise;

    var p3 = $http.get("../demo-data/colors.json");

    /*
    p1.then(function(v) {
      p2.then(function(v2) {
        p3.then(function(v3) {
          console.log("answer-plain", v + v2 + v3.data.length);
        })
      })
    });
    */

    $q.all([p1, p2, p3]).then(function(answers) {
      console.log("answer-$qall", answers[0] + answers[1] + answers[2].data.length);
    }).catch(function(e) {
      console.error("errorfrom $q all", e);
    });

    function a() { return 45; }

    $scope.go1 = function() {
      d1.resolve(1);
    };

    $scope.go2 = function() {
      d2.resolve(2);
    };

    $scope.stop = function() {
      d1.reject("oops");
    };

    function printer(d) {
      console.log("printer", d);
      return d;
    }

    function identity(d) {
      return d;
    }

    function inc(d) {
        return d+1;
    }

    function errorHandler(e) {
      console.error(e);
    }

    p1.then(printer)
      .then(inc)
      .then(identity)
      .then(printer)
      .catch(errorHandler);

  }

})(window.angular);
