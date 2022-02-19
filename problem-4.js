// Problem-4

function oddFriend(nameOfFriends){
    if(!Array.isArray(nameOfFriends)){
        return 'Value must be an array of names!';
    }

    if(nameOfFriends.length === 0){
        return 'Array can not be empty!'
    }

    let longestName;
    let longestNameLength = 0;

    for (let i = 0; i < nameOfFriends.length; i++){
        if(typeof(nameOfFriends[i]) !== 'string'){
            return 'Every element must be a type of string!'
        }
        else {
            if (nameOfFriends[i].length > longestNameLength && nameOfFriends[i] % 2 != 0){
                longestNameLength = nameOfFriends[i].length;
                longestName = nameOfFriends[i];
            }
        }
    }

    return longestName;
}
let nameOfFriends = ["Asif Hayat", "Tasrifa Labonno", "Rayhan", "Laobni", "Shahed", "Mithun", "Borhan Uddin"];
let longOddFriendsName = oddFriend(nameOfFriends);
console.log(longOddFriendsName);