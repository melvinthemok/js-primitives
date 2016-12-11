var myFriends = [
  'Rickon',
  'Meera',
  'Hodor',
  'Jojen',
  'Osha',
  'Rickard',
  'Maester',
  'Rodrik',
  'Jory',
  'Septa',
  'Jon'
]

var yourFriends = [
  'Bilbo',
  'Boromir',
  'Elrond',
  'Faramir',
  'Frodo',
  'Gandalf',
  'Legolas',
  'Pippin'
]

var ourFriends = myFriends.concat(yourFriends)
var sortOurFriends = ourFriends.sort()

var lastFriend = sortOurFriends.pop()

console.log('Our friends are ' + sortOurFriends + ', and ' + lastFriend + '.')
