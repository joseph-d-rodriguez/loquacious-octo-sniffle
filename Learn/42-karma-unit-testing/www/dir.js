"use strict";

angular.module("kyle.dir", [])

.controller("directiveDemoController", function($scope, $http) {
	$scope.format = 'M/d/yy h:mm:ss a';
})

.directive("myCurrentTime", function($interval, dateFilter) {
	return {
		link: function(scope, element, attrs) {
			var fmt, timeoutId;

			function updateTime() {
				// element is always already wrapped
				// $(element) do not do.
				element.text(dateFilter(new Date(), fmt));
			}

			// manual impl of scope: { something : "=something" }
			scope.$watch(attrs.myCurrentTime, function(n, o) {
				fmt = n;
				updateTime();
			});

			element.on('$destroy', function() {
				$interval.cancel(timeoutId);
			});

	        // start the UI update process; save the timeoutId for canceling
	        timeoutId = $interval(function() {
	          	updateTime(); // update DOM
	      	}, 1000);
	    }
	}
});
