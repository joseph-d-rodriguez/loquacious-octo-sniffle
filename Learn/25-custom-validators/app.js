(function(angular) {
  'use strict';

  // A custom validator looks like any other directive,
  // other than requiring ngModel.

  angular.module('formExample', [])
    .directive('mustBeEven', function() {
      return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
          ctrl.$validators.even = function(modelValue, viewValue) {
            return ctrl.$isEmpty(modelValue) ||
              parseInt(modelValue) % 2 == 0;
          };
        }
      };
    });

})(window.angular);
