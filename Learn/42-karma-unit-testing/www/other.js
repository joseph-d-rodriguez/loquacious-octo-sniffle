'use strict';

// this is in kyle/other.js
angular.module('kyle.other', [])

.controller('ddd', function($http, $scope, $q, $timeout) {

})

.controller('bindingDemo', function($scope) {
	console.log("controller entered");
	$scope.name = "";

	var n = 0;

	$scope.big = function() {
		n++;
		console.log("big() was called, " + n);
		return $scope.name.toUpperCase();
		// return $scope.get("name").toUpperCase();
		// return $scope.name().toUpperCase();
	};

	$scope.description = function() {
		return $scope.big() + " " + $scope.height;
	};

	$scope.area = function() {
		return $scope.width * $scope.height;
	};

	$scope.volume = function() {
		return $scope.area() * $scope.depth;
	};

	$scope.$watch("width * height * depth", function(n,o) {
		$scope.calcVolume = n;
	});
	console.log("controller exit");
})

.controller("manyController", function($scope) {

	$scope.boxes = [];
	for(var i=0; i<5000; i++) {
		$scope.boxes.push({name:"box", num: i, size:"L"});
	}

	$scope.change = function() {
		for(var i=0; i<5000; i++) {
			$scope.boxes[i].size = "S";
		}
	}

});





