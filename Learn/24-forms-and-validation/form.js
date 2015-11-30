(function (angular) {
  "use strict";

  angular.module('exampleApp', ['ngMessages'])
    .controller('FormController', FormController);

  function FormController() {
    var vm = this;

    vm.submit = function (form) {
      // if (form.$valid) {
      //   myName.first = vm.name.first;
      //   myName.last = vm.name.last;
      //   form.$setPristine;
      // }
    };
  }

})(window.angular);
