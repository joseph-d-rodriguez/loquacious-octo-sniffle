(function (angular) {
  "use strict";

  angular.module('app1', [
    'ngRoute'
  ])
  .controller('PhoneDetailController', PhoneDetailController)
  .config(
    function ($routeProvider) {
      $routeProvider.
        when('/phone', {
          templateUrl: 'phone-detail.html',
          controller: 'PhoneDetailController'
        }).
        otherwise({
          redirectTo: '/phone'
        });
    });

  function PhoneDetailController($scope, $http) {
    $http.get('/phone-data/motorola-xoom-with-wi-fi.json').success(function (data) {
      $scope.phone = data;
      $scope.mainImageUrl = data.images[0];
    });

    $scope.setImage = function setImage(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }

})(window.angular);
