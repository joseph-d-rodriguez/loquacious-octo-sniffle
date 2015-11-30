(function (angular) {
  "use strict";

  angular.module('kyle.other', [])

    .controller('ddd', function ($http, $scope, $q, $timeout) {

      var d1 = $q.defer();
      var d2 = $q.defer();

      var p1 = d1.promise;   // Not promise()
      var p2 = d2.promise;

      p1.then(function (data) {
        console.log("p1 the data is " + data);
      }, function (err) {
        console.log("p1 the error is " + err);
      });

      p1.then(function (data) {
        console.log("p1 the data is " + data);
      });

      var p2b = p2.then(function (data) {
        return data.toUpperCase();
      }).then(function (data) {
        return data + "!!";
      }).then(function (data) {
        console.log("p2 again the data is " + data);
        return data;
      });

      function upperCaseMe(data) {
        return data.toUpperCase();
      }

      function printMe(data) {
        console.log(data);
        return data;
      }

      var httpAnswer = $http.get("index.html").then(function (obj) {
        return obj.data;
      }).then(upperCaseMe)
      //.then(printMe)
        .catch(function (e) {   // shorthard for then(null, ...)
          return "eeeee";
        }).then(function (text) {
          return text.length;
        });

      var slow = $timeout(function () { }, 3000);

      var all = $q.all([p1, p2b, httpAnswer, slow]);
      all.then(function (d) {
        console.log("all: answer: " + d.join(" / "));
        $scope.answer = d;
      }, function (err) {
        console.log("all: the error is " + err);
      });

      d2.resolve("Anne");

      setTimeout(function () {
        d1.reject("too slow");
      }, 5000);

      $scope.done = function () {
        d1.resolve("Ben");
        console.log("!!!");
      };

      /*
      var dbDef = $defer();
      databaseRead("param", function(data) {
        dbDef.resolve(data);
      });
      dbDef.promise;
      */
    });
})(window.angular);
