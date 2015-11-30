// Plain JS file, no Angularism here.

// For simplicity, this uses no module system at all,
// instead putting this function on the global (window) object.

// No IIFE here!

function reverseString(d) {
  // Beware that console.log breaks some IE versions.
	// console.log("reverse filter", d);
	if(d && d.split) {
		return d.split("").reverse().join("");
	}
};
