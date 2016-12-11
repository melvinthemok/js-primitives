var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet'

var arrayFriends = friends.split(',')

var alphaArrayFriends = arrayFriends.sort()

var reverseAlphaArrayFriends = alphaArrayFriends.reverse()

var lastFriend = reverseAlphaArrayFriends.pop()

console.log('The reverse alphabetically sorted list of friends are ' + reverseAlphaArrayFriends + ', and ' + lastFriend + '.')
