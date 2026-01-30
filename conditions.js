
// if condition 

// let age = 25;
// let quality = 'bcs';
// let height = 65;
// let hasCar = true;

// if(age >=25){
//     console.log('able to marry')
// }else{
//     console.log('go to bari')
// }

// if(age > 26 && quality == 'bcs'){
//     console.log('ready to be groom')
// }else{
//     console.log('wait for next year')
// }

// if ((age == 25 && hasCar == true)|| (quality == 'bcs' && height > 60)) {
//     console.log('you are perfect for becoming a groom')
// }
// if ((age == 25 && hasCar == true) && (quality == 'bcs' && height > 70)) {
//     console.log('you are perfect for becoming a groom')
// }else{
//     console.log('wait for more times')
// }


// else if condition

// let price = 2000;

// if (price > 5000) {
//     // 10% discount
//     let discount = price * 10/100;
//     let payAmount = price - discount;
//     console.log(payAmount);
// }
// else if( price > 2500){
//     // discount 5% 
//     let discount = price * 5/100;
//     let payAmount = price - discount;
//     console.log(payAmount)
// }
// else if(price > 1500){
//     // a scratch card
//     console.log('scratch your card and have a gift.')
// }
// else{
//     console.log(price)
// }

let age = 65;
let foodPrice = 300;

if( age <= 12){
    // full free
    console.log('you can eat free of cost')
}
else if(age > 40){
    // 5% discount
    let discount = foodPrice * 5/100;
    let payAmount = foodPrice - discount;
    console.log(payAmount);
}
else if(age > 60){
    // 50% discount
    let discount = foodPrice *50/100;
    let payAmount = foodPrice - discount;
    console.log(payAmount);
}
else{
    console.log("you are requested to pay : ", foodPrice)
}