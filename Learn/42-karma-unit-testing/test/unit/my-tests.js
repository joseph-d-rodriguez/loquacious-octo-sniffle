
function f(x) {
	if(x>=97) return 0;
	return x + 4;
}

describe("easy tests", function() {

	it("contains spec with an expectation", function() {
		expect(true).toBe(true);
	});

	describe("A suite is just a function", function() {
		var a;
		it("and so is a spec", function() {
			a = 422;
			expect(a).toBe(422);
		});
	});
});

describe("testing f", function() {

	it("works with 6", function() {
		expect(f(6)).toBe(10);
	})

	it("zeroes out at 97", function() {
		expect(f(97)).toBe(0);
	})

});
