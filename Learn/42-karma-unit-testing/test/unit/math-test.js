describe("basic", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });

    it("should return 5", function () {
        expect(five()).toBe(5);
    });
});

describe("math-test", function() {
    beforeEach(module("common.math"));

    var jbMath;
    beforeEach(inject(function(_jbMath_) {
        jbMath = _jbMath_;
    }));
    it("should add 2 + 2", function () {
        expect(jbMath.add(2,2)).toBe(4);
    });
    it("should subtract 8 - 2", function () {
        expect(jbMath.subtract(8,2)).toBe(6);
    });

});
