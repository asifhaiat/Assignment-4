// Problem-1 ana to vori://
function anaToVori(ana){
    if(ana < 0){
        return 'Value must be a positive number!!!';
    }

    if(typeof(ana) !== 'number'){
        return 'Value must be a number!!!';
    }

    let vori = ana / 16;

    return vori;
}
let totalVori = anaToVori(32);
console.log(totalVori);

// Problem-2://
function pandaCost(singaraValue, samuchaValue, jilapiValue){
    if((singaraValue < 0) || (samuchaValue < 0) || (jilapiValue < 0)){
        return 'Value must be a positive number!!!';
    }

    if(typeof(singaraValue) !== 'number' || typeof(samuchaValue) !== 'number' || typeof(jilapiValue) !== 'number'){
        return 'Value must be a number!!!';
    }

    let singaraPrice = 7;
    let samuchaPrice = 10;
    let jilapiPrice = 15;

    let totalBudget = (singaraValue * singaraPrice) + (samuchaValue * samuchaPrice) + (jilapiValue * jilapiPrice);

    return totalBudget;
}
let totalPrice = pandaCost(1, 1, 1);
console.log(totalPrice);

// Problem-3://
function picnicBudget(numberOfMembers){
    if(numberOfMembers <= 0){
        return 'Value must be a greater than 0!!!';
    }

    if(typeof(numberOfMembers) !== 'number'){
        return 'Value must be a number!!!';
    }

    
    let firstHundredMembers = 50;
    let secondHundredMembers = 40;
    let restOfMembers = 30;

    if(numberOfMembers <= 100){
        const totalCostFirstHundredMembers = firstHundredMembers * numberOfMembers;  
        return totalCostFirstHundredMembers;
    }

    else if(numberOfMembers <= 200){
        const costFirstHundredMembers = firstHundredMembers * 100;
        const remainingCost = numberOfMembers - 100;
        const costSecondHundredMembers = remainingCost * secondHundredMembers;
        const totalCostSecondHundredMembers = costFirstHundredMembers + costSecondHundredMembers;
        return totalCostSecondHundredMembers;
    }

    else{
        const costFirstHundredMembers = firstHundredMembers * 100;
        const costSecondHundredMembers = secondHundredMembers * 100;
        const remainingCost = numberOfMembers - 200;
        const restOfMembersCost = remainingCost * restOfMembers;
        const totalRestOfCost = costFirstHundredMembers + costSecondHundredMembers + restOfMembersCost;
        return totalRestOfCost;
    }
}
let totalBudget = picnicBudget(200);
console.log(totalBudget);


// Problem-4//
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
            if (nameOfFriends[i].length > longestNameLength){
                longestNameLength = nameOfFriends[i].length;
                longestName = nameOfFriends[i];
            }
        }
    }

    return longestName;
}
let nameOfFriends = ["Asif Hayat", "Tasrifa Labonno", "Rayhan", "Laobni", "Shahed", "Mithun", "BorhanUddin"];
let longOddFriendsName = oddFriend(nameOfFriends);
console.log(longOddFriendsName);