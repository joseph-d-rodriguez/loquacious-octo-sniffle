(function (angular) {
  "use strict";

  // This reminds us that an Angular module is just a JS object.
  var m = angular.module('exampleApp', []);

  m.controller('AController', function ($scope, myService, myFactory) {
    $scope.person = { name: "Kyle" };
    $scope.zip = 12345;

    // <p>Greetings: {{greeting1}} {{greeting2}} </p>
    $scope.greeting1 = myService.sayHello("Joe");
    $scope.greeting2 = myFactory.sayHello("Joe");
  });

  m.service('myService', function ( /* DI */ ) {
    // service is just a constructor function
    // that will be called with 'new'
    var that = this;
    this.sayHello = function (name) {
      return "Hi " + name + "!";
    };
    this.fullGreeting = function (n) {
      return "Greetings;" + that.sayHello(n);
    };
  });

  m.factory('myFactory', function ( /* DI */ ) {
    // factory returns an object
    // you can run some code before
    function sayHello(name) {
      return "Hi " + name + "!";
    }
    function fullGreeting(n) {
      return "Greetings;" + sayHello(n);
    }
    return {
      sayHello: sayHello,
      fullGreeting: fullGreeting
    };
  });

  // m.factory('sayHello', function ( /* DI */ ) {
  //   return function sayHello(name) {
  //     return "Hi " + name + "!";
  //   };
  // });

  m.constant("NOTQUITEPI", 3);

  /*
  function Foo() {
    this.that = "eee";
  }

  var c = new Foo();

  var s = {  };
  */

})(window.angular);
