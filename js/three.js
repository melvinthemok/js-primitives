var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

var arrayFriends = friends.split(',');

var alphaArrayFriends = arrayFriends.sort();

var lastFriend = arrayFriends.pop();

console.log("The alphabetically sorted list of friends are " + arrayFriends + ", and " + lastFriend + ".");
