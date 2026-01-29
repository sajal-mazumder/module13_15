
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

let price = 2000;

if (price > 5000) {
    // 10% discount
    let discount = price * 10/100;
    let payAmount = price - discount;
    console.log(payAmount);
}
else if( price > 2500){
    // discount 5% 
    let discount = price * 5/100;
    let payAmount = price - discount;
    console.log(payAmount)
}
else if(price > 1500){
    // a scratch card
    console.log('scratch your card and have a gift.')
}
else{
    console.log(price)
}
