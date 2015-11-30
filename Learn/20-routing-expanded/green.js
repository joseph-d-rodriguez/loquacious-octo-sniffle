(function(angular) {
  'use strict';

  function GreenController ($scope) {
      $scope.message = "Hello Green World!";
    }

  angular.module('BootcampApp')
    .config(function($routeProvider) {
      $routeProvider.when('/green', {
        templateUrl: 'green.html',
        controller: 'GreenController as gc',
      })
    })
    .controller("GreenController", GreenController);

})(window.angular)
