(function (angular) {
  "use strict";

  angular.module("addressBook", ["addressEntry", "expando"])
    .directive("addressBook", function () {
      return {  // DDO
        templateUrl: "components/addressBook-bind-to/addressBook.html",
        controller: AddressBookController,
        controllerAs: "bc",
        scope: {  // "Isolate Scope"
        },
        bindToController: {
          purpose: "@purpose"
        }
      };
    });

    function AddressBookController($http) {
      var self = this;
      $http.get("data.json").then(function (response) {
        self.addresses = response.data;
      });
      self.add = function add() {
        self.addresses.push({
          heading: "New"
        });
      };

      // This does not work, because binding happens after the controller.
      self.purpose = self.purpose + " and more";
    };

})(window.angular);
