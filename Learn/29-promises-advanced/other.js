(function (angular) {
  "use strict";

  function unWrapData(d) {
    return d.data;
  }

  function getLength(d) {
    return d.length;
  }

  function printAndContinue(d) {
    console.log(d);
    return d;
  }

  angular.module('kyle.other', [])

    .controller('ddd', function ($scope, $q, $http) {

      var d1 = $q.defer();
      var p1 = d1.promise;

      d1.resolve(333);

      var d2 = $q.defer();
      var p2 = d2.promise;

      var p2prime = p2.then(function (d) {
        return d + "qqqqq";
      });

      p2.then(function (d) {
        console.log("P2 data is " + d);
      }, function (e) {
        console.log("P2 error is " + e);
      });

      d2.reject("EEEEE");

      var p3 = $http.get("index.html");

      var d4 = $q.defer();

      setTimeout(function () {
        d4.resolve("done");
      }, 4000);

      $q.all([p1, p2prime, p3, d4.promise]).then(function (a) {
        console.log(a);
      }, function (e) {
        console.log("ALL error is " + e);
      });


      var p8 = $http.get("QQQindex.html");

      p8.then(null, function (e) {
        // return $q.reject("unhappy");
        return "happy";
        ///return $http.get("index.html");
      })
        .then(unWrapData)
        .then(getLength)
        .then(function (d) {
          console.log("p8 " + d);
        }, function (e) {
          console.log("p8 error is " + e);
        });

    });

})(window.angular);
