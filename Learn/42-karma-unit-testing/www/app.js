'use strict';

angular.module('kyle.app', ['kyle.other', 'kyle.dir', 'ngRoute'])

.config(function($routeProvider) {
	$routeProvider
    .when("/one", {
      templateUrl: "partials/one.html",
      controller: "aaa",
      resolve: {
        "p": "PhoneData",
        "len": "LengthData"
      }
    })
    .when("/binding", {
      templateUrl: "partials/bindingDemo.html",
      controller: "bindingDemo"
    })
    .when("/many", {
      templateUrl: "partials/many.html",
      controller: "manyController"
    })
    .when("/dir", {
      templateUrl: "partials/directiveDemo.html",
      controller: "directiveDemoController"
    })
		.otherwise( {
			redirectTo: "/one"
		});
})

.controller('aaa', function($scope, p, len) {
  $scope.person = { name: "Kyle"};
  $scope.zip = 12345;
  $scope.phones = p;
  $scope.len = len;
})

.factory("PhoneData", function($http, kcSleep) {
  return $http.get("phones/phones.json")
  .then(kcSleep(800))
  .then(function(d) {
  	return d.data;
  });
})

.factory("LengthData", function($http, kcSleep) {
  return $http.get("index.html")
  .then(kcSleep(1200))
  .then(function(d) {
    return d.data.length;
  });
})

// skip if you want:
.factory("kcSleep", function($timeout) {
  return function(ms) {
    return function(value) {
      return $timeout(function() {
        return value;
      }, ms);
    };
  };
})

;
