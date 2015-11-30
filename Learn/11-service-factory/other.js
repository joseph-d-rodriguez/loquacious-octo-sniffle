(function (angular) {
  "use strict";

  // this is in kyle/other.js
  angular.module('kyle.other', [])

    .controller('ddd', function ($scope, myService, myFactory) {
      $scope.greeting1 = myService.sayHello("Joe");
      $scope.greeting2 = myFactory.sayHello("Joe");

      // <input ng-model="name">
      // Greeting = {{greet(name)}}
      $scope.greet = myFactory.sayHello;
    });

})(window.angular);
