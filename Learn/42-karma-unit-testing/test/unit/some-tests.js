

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

describe("adder", function() {

	it("adds two number", function() {
		expect(adder(4,5)).toBe(9);
	});

	it("adds one number", function() {
		expect(adder(4)).toBe(4);
	});

	it("adds 3 numbers", function() {
		var x = adder(4, 6, 7);
		expect(x).toBe(17);
	});

});

describe("try out the adderator", function() {

	var a;

	beforeEach(module('kyle.other'));

	beforeEach(inject(function(adderator) {
		a = adderator;
	}));

	it("adds two number", function() {
		expect(a(4,5)).toBe(9);
	});

	it("adds one number", function() {
		expect(a(4)).toBe(4);
	});

	it("adds 3 numbers", function() {
		var x = a(4, 6, 7);
		expect(x).toBe(17);
	});

});

