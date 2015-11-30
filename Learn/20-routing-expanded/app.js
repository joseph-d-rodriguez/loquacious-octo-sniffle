(function (angular) {
  "use strict";

  angular.module("BootcampApp", ["ngRoute"])    // no other modules?
    .config(function ($routeProvider) {
      $routeProvider
        .when("/blue", {
          templateUrl: "blue.html",
          controller: "BlueController",
          controllerAs: "bc",   // Not the only way to do this.
          // You can add your own extra fields:
          pageTitleNotBuiltIn: "BLUE-ISH"
        })
        .when("/red", {
          templateUrl: "red.html",
          controller: "RedController",
          caseInsensitiveMatch: true,
          pageTitleNotBuiltIn: "RED-ISH"
        })
        .when("/yellow/:id", {
          template: MyFunction,  //called with route parameters
          controller: "YellowController",
          pageTitleNotBuiltIn: "YELLOW-ISH"
        })
        .otherwise({
          redirectTo: "/blue"
        });

      // Can also be set globally:
      // $routeProvider.caseInsensitiveMatch = true;

      // We will see "resolve" later, after Promises.

      function MyFunction(params) {
        return "<h1>Dynamic template</h1><p>" +
          JSON.stringify(params) +
          "</p><p>{{message}}</p>"
      }
    })

		.controller("TitleController",
		    function TitleController($rootScope, $log, $route) {
      // listen for event, update title
      var self = this;
      self.title = "Starting title";
      $rootScope.$on('$routeChangeSuccess', function() {
        self.title = $route.current.pageTitleNotBuiltIn;
      });
		});

})(window.angular);
