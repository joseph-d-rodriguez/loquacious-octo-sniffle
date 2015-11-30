(function() {

'use strict';

var m = angular.module('kyle.app', ['kyle.other']);

m.controller('aaa', function($scope) {
  $scope.person = { name: "Kyle", age: 66, size: "medium"};
  $scope.zip = 12345;

});

}());
