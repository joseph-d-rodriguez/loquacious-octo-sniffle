(function (angular) {
  "use strict";

  angular.module('callbackModule', ['promisesModule'])
    .controller('CallbackController', CallbackController);

  function CallbackController() {

    // print a(b(34));

    function a(callBack) {
      setTimeout(function() { callBack("hello") }, 2000);
      return "Sorry, not available yet";
    }

    function b(p1, callBack) {
      setTimeout(function() { callBack(p1 + "andmore")}, 2000);
    }

    a(function(val) {
      b(val, function(val2) {
        console.log(val2);
      })
    });

    //  parallel

    function c(callBack) {
      setTimeout(function() { callBack(50) }, 1000);
    }

    function d(callBack) {
      setTimeout(function() { callBack(4) }, 1000);
    }

    var answers = [];

    function checkDone() {
      if(answers.length==2) {
        console.log(answers[0] + answers[1]);
      }
    }

    d(function(v2) {
      answers.push(v2);
      checkDone();
    });

    c(function(v1) {
      answers.push(v1);
      checkDone();
    });

  }

})(window.angular);
