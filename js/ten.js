var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

var compareNumbers = function(a, b) {
  return a - b;
};

var sortAges = ages.sort(compareNumbers);

var median = sortAges.length / 2;

var medianPos = Math.floor(median);

if ((2 * median) % 2 === 1) {
  console.log("The median is " + ages[medianPos] + ".");
} else if ((2 * median) % 2 === 0) {
  console.log("Additional calculation needed.");
} else {
  console.log("Error");
}
