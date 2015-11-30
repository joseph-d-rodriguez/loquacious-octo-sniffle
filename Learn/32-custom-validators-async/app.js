(function(angular) {
  'use strict';

  angular.module('formExample', [])
    .directive('westernZip', function($q, $timeout, $http) {
      return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
          ctrl.$asyncValidators.westernZip = function(modelValue, viewValue) {
            if (ctrl.$isEmpty(modelValue) || modelValue.length!=5) {
              return $q.reject(); // Empty == not valid
            } else {
              return $timeout(function() {}, 3000).then(function() {
                return $http.get('http://api.zippopotam.us/us/' + modelValue);
              }).then(function(response) {
                var longitude = response.data.places[0].longitude;
                if(longitude > -90) {
                  return $q.reject();
                }
                // return anything else, promise resolves, valid.
              })
            }
          };
        }
      };
    });
})(window.angular);
