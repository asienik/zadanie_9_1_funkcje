// Hello.
//
// This is a task "what if".

/*alert var name = prompt('Enter your name');
('Hello, ' + name);
console.log('Hello, ' + name);*/

var triangle1Area = getTriangleArea(10, 15),																		
	triangle2Area = getTriangleArea(2, 3),
	triangle3Area = getTriangleArea(5, 6);

function getTriangleArea(a, h) {
if (a <= 0 || h <= 0) { 
	console.log('niewłaściwe dane');
} else {
	return console.log(a * h / 2);
	}
}
console.log(getTriangleArea(10, 6))