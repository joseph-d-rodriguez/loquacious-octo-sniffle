(function (angular) {
  "use strict";

  function FirstController() {
      this.name = "Barry";

      // var vm = this;
      // vm.name = 'Harold';
    }

  angular.module('sandbox', [])
    .controller('FirstController', FirstController);

})(window.angular);
