/**
 * Ternary operator
 * 
 *   ?   :
 * 
 *   condition ? true : false
 */

const age = 12;
//normal if else
// if(age >= 18){
//     console.log("You can vote")
// }
// else{
//     console.log("tumi ghumai thako")
// }

// simple ternary
// age >= 18 ? console.log("You can vote") : console.log("tumi ghumai thako");


// complex ternary

let price = 500;
const isLeader = true;

// if(isLeader === true){
//     price = 0;
// }
// else{
//     price = price + 100;
// }
// console.log(price);

// price = isLeader === true ? 0 : price + 100;
// console.log(price);

// OPTIONAL: Semi ternary:

if(isLeader === true){
    if(price > 1000){
        price = price / 2;
    }
    else{
        price = 0;
    }
}
else{
    price = price + 1000;
}


price = isLeader === true ? price > 1000 ? price / 2 : price = 0 : price + 1000;
console.log(price);