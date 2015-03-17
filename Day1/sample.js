var a = "some string";
var b = "452";
var c = 452;

console.log(a + b);
console.log(a + c);
console.log(b + c);

if (b == c) {
  console.log("same");
} else {
  console.log("not the same");
}

// now lets do an absolute check
if (b === c) {
  console.log("equal");
} else {
  console.log("not equal");
}

var theSentence = "This is a sentence that\nhas various \"escape\" sequences in it."
console.log(theSentence);
