(function (angular) {
  "use strict";

  function CountryController($scope, $http) {
    $http.get('../demo-data/countries.json').success(function (data) {
      $scope.countries = data;
    });
  }

  angular.module('app1', [])
    .controller('CountryController', CountryController);
})(window.angular);
