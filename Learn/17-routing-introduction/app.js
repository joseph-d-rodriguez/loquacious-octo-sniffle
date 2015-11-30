(function (angular) {
  "use strict";

  angular.module('simpleApplication', ['ngRoute'])
    .config(
      function ($routeProvider) {
        $routeProvider.
          when('/welcome', {
            templateUrl: 'welcome.html',
            controller: 'WelcomeController'
          }).
          when('/countries', {
            templateUrl: 'country-list.html',
            controller: 'CountryListController'
          }).
          when('/country/:countryCode', {
            templateUrl: 'country-detail.html',
            controller: 'CountryDetailController'
          }).
          otherwise({
            redirectTo: '/welcome'
          });
      })
    .controller('WelcomeController', WelcomeController)
    .controller('CountryListController', CountryListController)
    .controller('CountryDetailController', CountryDetailController);

  function WelcomeController($scope) {
    $scope.who = 'World';
  }

  function CountryListController($scope, $http) {
    $http.get('../demo-data/countries.json').success(function (data) {
      $scope.countries = data;
    });

    $scope.orderProp = 'countryName';
  }

  function CountryDetailController($scope, $routeParams) {
    $scope.countryCode = $routeParams.countryCode;
  }

  // Angular does not care how modules are grouped in files.
  // a ___Controllers module makes little sense in real applications.

})(window.angular);
