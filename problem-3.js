// Problem-3:
function picnicBudget(numberOfMembers){
    if(numberOfMembers <= 0){
        return 'Value must be a greater than 0!!!';
    }

    if(typeof(numberOfMembers) !== 'number'){
        return 'Value must be a number!!!';
    }

    
    let firstHundredMembers = 5000;
    let secondHundredMembers = 4000;
    let restOfMembers = 3000;

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
let totalBudget = picnicBudget(201);
console.log(totalBudget);
