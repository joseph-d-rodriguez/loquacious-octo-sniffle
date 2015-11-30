(function (angular) {
  'use strict';

  angular.module('app', [])

    .controller('ExampleController', function (answerService) {
      var vm = this;

      answerService.loadData().then(function (answer) {
        vm.answer = answer;
      }).catch(function(err) {
        vm.err = err;
      });
    })

    .service('answerService', function ($http) {
      this.loadData = function () {
        return $http.get('http://angularbootcamp.com/service_that_requires_auth.php')
          .then(function(d) {
            return d.data;
          });
      };
    })

    .config(function($httpProvider) {
      // Register an interceptor via an anonymous factory function
      $httpProvider.interceptors.push(function(/* DI here */) {
        return {
          'request': function(config) {
            config.headers['X-SECRET-HEADER'] = 'g76dg34f764';
            return config;
          },
          'response': function(response) {
            return response;
          }
        };
      });
    });

})(window.angular);
