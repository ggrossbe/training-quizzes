var myArray = new Array("Tom", "Harry", "Sally", "Janet");

//for var elem in (myArray) {
for (var i = 0; i < myArray.length; i++) {
      console.log(myArray[i]);
}
console.log('\n');

var i = 0;
while (i<myArray.length) {
  console.log(myArray[i]);
  i++;
}
console.log('\n');

i = 0;
do {
  if (null != myArray[i]) {
    console.log(myArray[i]);
  }
  i++;
} while (i<myArray.length);
console.log('\n');


var aString = "aString";
if (typeof aString === 'string') {
  console.log("This is a string");
}
console.log('\n');


var aNumber = 123;
if (typeof aNumber === 'number') {
  console.log("This is a number");
}
console.log('\n');

var anObject = new Array(1, 2, 3);
if (typeof anObject === 'object') {
  console.log("This is an object");
}
console.log('\n');

var aBoolean = true;
if (typeof aBoolean === 'boolean') {
  console.log("This is a boolean");
}
console.log('\n');
