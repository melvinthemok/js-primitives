var arrayOfArrays = [['apple', 'pear', 'orange'], ['dog', 'mouse', 'cat'], ['green', 'blue', 'red']]

var merged = [].concat.apply([], arrayOfArrays);

var sortedMerged = merged.sort();

var lastItem = sortedMerged.pop();

console.log("The sorted array is " + sortedMerged + " and " + lastItem + ".");
