(function (angular) {
  "use strict";

  var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatAnimations',
    'phonecatControllers',
    'phonecatFilters',
    'phonecatServices'
  ]);

  phonecatApp.config(
    function ($routeProvider) {
      $routeProvider.
        when('/phones', {
          templateUrl: 'phone-list.html',
          controller: 'PhoneListCtrl'
        }).
        when('/phones/:phoneId', {
          templateUrl: 'phone-detail.html',
          controller: 'PhoneDetailCtrl'
        }).
        otherwise({
          redirectTo: '/phones'
        });
    });
})(window.angular);
