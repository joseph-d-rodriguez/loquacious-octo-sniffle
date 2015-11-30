(function (angular) {
  "use strict";

  angular.module('app1', ['ngRoute'])
    .config(['$routeProvider',
      function ($routeProvider) {
        $routeProvider.
          when('/country', {
            templateUrl: 'country-detail.html',
            controller: 'CountryDetailController'
          }).
          otherwise({
            redirectTo: '/country'
          });
      }])

    .controller('CountryDetailController', CountryDetailController);

  function CountryDetailController($scope, $http) {
    $scope.showEthnicGroups = true;
    $scope.showGovt = true;
    $scope.otherInfo = '';

    $scope.toggleGovt = function() {
      $scope.showGovt = !$scope.showGovt;
    }

    $http.get('../demo-data/usa.json').success(function (data) {
      $scope.country = data;
    });
  }

})(window.angular);
