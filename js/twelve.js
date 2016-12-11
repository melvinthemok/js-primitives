var array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var object = {}

array1.forEach(function (value, index) {
  object[value] = array2[index]
})

console.log(object)
