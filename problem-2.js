// Problem-2:
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