(function (angular) {
  "use strict";

  angular.module('app1', ['ngRoute'])
    .config(['$routeProvider',
      function ($routeProvider) {
        $routeProvider.
          when('/country/:id', {
            templateUrl: 'country-detail.html',
            controller: 'CountryDetailController',
            controllerAs: 'cdc',
            resolve: {
              // This variant requires that the factory *is* a promise:
              // "country": "CountryLoader"
              // More typically a factory has a function which returns a promise;
              // DI is available in a resolve function.
              "country": function ($route, CountryService) {
                // $routeParams is not updated until the route is resolved - use $route.current.params instead
                return CountryService.load($route.current.params.id);
              }
            }
          }).
          otherwise({
            redirectTo: '/country/usa'
          });
      }])

    .controller('CountryDetailController', CountryDetailController)
    .service('CountryService', CountryService)
    .factory("promiseSleep", function ($timeout) {
      return function (ms) {
        return function (value) {
          return $timeout(function () {
            return value;
          }, ms);
        };
      };
    });

  function CountryDetailController(country) {
    var vm = this;
    vm.country = country;
    // The old way, without Route-Resolve:
    // CountryService.load(countryCode).then(function(x) {
    //   vm.country = x;
    // });

    vm.count = function count() {
      vm.counter++;
    };

    vm.counter = 0;
  }

  function CountryService($http, promiseSleep) {
    this.load = function (countryCode) {
      return $http.get('../demo-data/' + countryCode + '.json')
        .then(promiseSleep(1800)) //to make it visibly delay
        .then(function (response) {
          return response.data;
        });
    }
  }

  function CountryLoader($route, CountryService) {
    return CountryService.load($route.current.params.id);
  };

})(window.angular);
