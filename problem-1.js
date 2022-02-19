// Problem-1 ana to vori:
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
