// Write a function that takes a number as an input.
// Have it create an empty array and then push a string into the array as many
// times as the input number
//
// Name the function "finalFunction"
function finalFunction(num) {
	var myArrray = [];
	for (var i = 0; i < num; i++) {
		myArrray.push('our push string');
	}
	return myArrray;
}

console.log(finalFunction(4));
