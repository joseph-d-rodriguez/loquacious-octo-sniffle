'use strict';

var s;

angular.module('kyle.other', [])

.controller('top', function($scope, adderator) {
	$scope.title = function() {
		//console.log("Title called");
		return "Title Goes Here";
	};

	$scope.result = adderator(5, 6);

})

.controller('sss', function($scope) {
	$scope.name = "Joe";
	$scope.address = "s w";
	s = $scope;

	$scope.foo = function() {
		$scope.name = "nnnn";
	}

	var boxes = [];
	for(var j=0; j<10; j++) {
		boxes.push({});
	}
	$scope.boxes = boxes;

	var i=0;

	$scope.count = function() {
		console.log("count called");
		// 10 $digest() iterations reached. Aborting!

		if(i < 5) i++;

		return $scope.address + i;
	}

	$scope.$watch("`address", function(n,o) {
		console.log(" address is now " + n);
	});

})

.factory("adderator", function() {
	return function () {
		var total = 0;
		for(var i=0; i<arguments.length; i++)
			total += arguments[i];
		return total;
	}
});

