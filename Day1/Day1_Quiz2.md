# Day 1 Quiz 2

**1. Create a variable array and put the values Tom, Harry, Sally, and Janet in the array. Then write the code to print out each item in the array with a for loop, then a while loop, then a do while loop.**

YOUR ANSWER:
var myArray = new Array("Tom", "Harry", "Sally", "Janet");

//for var elem in (myArray) {
for (var i = 0; i < myArray.length; i++) {
      console.log(myArray[i]);
}

var i = 0;
while (i<myArray.length) {
  console.log(myArray[i]);
  i++;
}

i = 0;
do {
  if (null != myArray[i]) {
    console.log(myArray[i]);
  }
  i++;
} while (i<myArray.length);

**2. Using the typeof operator, determine if a variable is a string, and print out "This is a string", to the console. Use the same process to determine if something is a Number, an Object, and one of the data type of your choice from the typeof.js samples.**

YOUR ANSWER:
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

FINISHED? When you are done, commit your answer and submit a pull request back to the main repository you forked inside of a branch with your name as the name of the branch.
