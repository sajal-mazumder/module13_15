

// burger eating

// let burgerPrice = 600;
// if (burgerPrice >= 500) {
//     console.log('you will get a 250 ml coke for free of cost.')
// }else{
//     console.log('you should pay 50tk for a 250 ml coke.')
// }

// bmi calculator

let weight = 95;
let height = 1.5;
let bmi = weight / height ** 2;

if (bmi < 18.5) {
    console.log('you are under weight. take healthy food to improve your physical condition.')
}else if(bmi == 18.5 && bmi <= 24.9)
    { console.log('you are normal in weight and height value and you are ok.') 
}else if (bmi > 25 && bmi <= 29) {
    console.log('you are overweight. control your weight.')
}else if (bmi > 29 && bmi == 39) {
    console.log('you are obese. you should strictly follow the hygene rule and must control your weight.')
}else if (bmi > 39) {
    console.log('your weight is out or control. sympathy for you.')
}else{
    console.log('thank you for calculating bmi.')
}