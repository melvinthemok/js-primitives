var foods = [
  'Popcorn',
  'Potato chips',
  'Shrimp',
  'Chicken rice',
  'Poutine',
  'Tacos',
  'Toast',
  'French Toast',
  'Crab',
  'Pho',
  'Lasagna',
  'Brownie',
  'Lobster',
  'Donuts',
  'Ice cream',
  'Hamburger',
  'Sushi',
  'Chocolate',
  'Pizza'
]

var donutsPos = foods.indexOf('Donuts')

foods.splice(donutsPos, 1)

console.log('The index of donuts is ' + donutsPos + ', and it has been removed.')
console.log(foods)
