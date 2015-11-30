(function (angular) {
  "use strict";

  angular.module("orange", [])
    .config(function ($routeProvider) {
      $routeProvider
        .when("/orange", {
          templateUrl: "/orange/orange.html",
          controller: "OrangeController"
        })
    })
    .factory("kcSleep", function ($timeout) {
      return function (ms) {
        return function (value) {
          return $timeout(function () {
            return value;
          }, ms);
        };
      };
    })
    .controller("OrangeController", function ($scope, $http, $q, kcSleep) {
      var p3 = $http.get("colors.json")
        .then(kcSleep(1000))
        .then(function (response) {
          return response.data;
        }).then(function (c) {
          $scope.colors = c;
          return c.length;
        });

      var d1 = $q.defer();
      var p1 = d1.promise;
      var d2 = $q.defer();
      setTimeout(function () {
        //            d2.reject("Too Late!");
      }, 3000);
      var p2 = d2.promise;

      d1.resolve("Yay!");

      p1.then(function (x) {
        console.log("Success: " + x);
      }, function (err) {
        console.log("Error: " + err);
      });

      $q.all([p1, p2, p3]).then(function (x) {
        console.log("They all worked", x);
      }, function (err) {
        console.log("Something failed", err);
      });

      $scope.resolveMe = function resolveMe() {
        d2.resolve("Woohoo!");
      };
    });
})(window.angular);
