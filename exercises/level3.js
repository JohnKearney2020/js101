function lvl3exercise1() {
	// Create a "hello" and a "world", return the concatenation of the two
	var hello = 'Hello';
	var world = 'World';
	return hello + ' ' + world;
}

function lvl3exercise2() {
	// Create a "hello" and a 12, return the concatenation of the two
	var hello = 'hello';
	var twelve = 12;
	return hello + twelve;
}

function lvl3exercise3() {
	// Create a variable that equals 12 and convert it to a string with concatenation. Return it.
	var num = 12;
	num = String(num);
	return num;
}

function lvl3exercise4() {
	// Create a "hello world!" string. Return the length of the string
	var hello = 'hello world!';
	return hello.length;
}

function lvl3exercise5() {
	// Create a "hello world!" string. Return the index of the word "world".
	var hello = 'hello world!';
	return hello.indexOf('world');
}
console.log(lvl3exercise5());
