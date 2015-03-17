var exports = module.exports = {};

exports.doThis = function() {
  return "foo";
}

exports.doThat = function() {
  return "bar";
}

exports.didStuff = function(first, second) {
  return first * second + " are the values " + first + " and " + second +
   " multipled."
}
