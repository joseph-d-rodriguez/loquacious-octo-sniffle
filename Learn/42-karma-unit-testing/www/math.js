angular.module("common.math", [])
    .factory("jbMath", function () {
        console.log("calling factory");
        function add(a, b) {
            return a + b;
        }
        function subtract(a, b) {
            return a - b;
        }
        return {
            add: add,
            subtract: subtract
        };
    })
    .service("jbMathService", function () {
        console.log("calling service");
        this.add = function(a, b) {
            return a + b;
        };
        this.subtract = function(a, b) {
            return a - b;
        };
    })
    .constant("NOTQUITEPI", 3);
