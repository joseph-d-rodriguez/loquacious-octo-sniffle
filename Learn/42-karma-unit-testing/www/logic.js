"use strict";

function adder() {
	var total = 0;
	for(var i=0; i<arguments.length; i++)
		total += arguments[i];
	return total;
}
