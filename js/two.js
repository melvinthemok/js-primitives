var friends = [
  'Moe',
  'Larry',
  'Curly',
  'Jane',
  'Emma',
  'Elizabeth',
  'Elinor',
  'Mary',
  'Darcy',
  'Grey',
  'Lydia',
  'Harriet'
];

var sortFriends = friends.sort()
var lastFriend = sortFriends.pop();

console.log("The alphabetically sorted list of friends are " + sortFriends + ", and " + lastFriend + ".");
