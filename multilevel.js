/**
 * Multilevel if else
 */

// const price = 4000;

// if(price >= 5000){
//     // 10% discount
//     const discount = price * 10 / 100;
//     const payamount = price - discount;
//     console.log("Your pay amount is: ", payamount);
// }
// else if(price >= 4000){
//     // 5% discount
//     const discount = price * 5 / 100;
//     const payamount = price - discount;
//     console.log("Your pay amount is: ", payamount);
    
// }
// else{
//     console.log("You are not eligible for discount");
// }

const age = 38;
const price = 300;

if(age < 12){
    console.log("You can eat for free")
}
else if(age >=60){
    // 50% discount
    const discount = price * 50 / 100;
    const payment = price - discount;
    console.log("Your pay amount is: ", payment);
}
else if(age >= 50 && age < 60){
    // 25% discount
    const discount = price * 25 / 100;
    const payment = price - discount;
    console.log("Your pay amount is: ", payment);
}
else if(age >= 30){
    // 10% discount
    const discount = price * 10 / 100;
    const payment = price - discount;
    console.log("Your pay amount is: ", payment);
    
}
else {
    console.log("You are not eligible for discount");
}