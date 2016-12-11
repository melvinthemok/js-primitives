var ages = "'Moe' is 18 'Larry' is 19 'Curly' is 20 'Jane' is 20 'Emma' is 21 'Elizabeth' is 18 'Elinor' is 23 'Mary' is 25 'Darcy' is 24 'Grey' is 18 'Lydia' is 24 'Harriet' is 18"
ages = ages.replace(/'/gi, '')

var agesSplit = ages.split(' ')

function findKeys (array) {
  var keys = []

  for (i = 0; i < array.length; i++) {
    if (i % 3 === 0) {
      keys.push(array[i])
    }
  }
  return keys
}

var foundKeys = findKeys(agesSplit)

function findValues (array) {
  var values = []

  for (j = 0; j < array.length; j++) {
    if (j === 2 || j % 3 === 2) {
      values.push(array[j])
    }
  }
  return values
}

var foundValues = findValues(agesSplit)

foundValues = foundValues.map(Number)

function toObject (names, values) {
  var result = {}
  for (var i = 0; i < names.length; i++)
    result[names[i]] = values[i];
  return result
}

object = toObject(foundKeys, foundValues)

console.log(object)
