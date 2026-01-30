

// burger eating

// let burgerPrice = 600;
// if (burgerPrice >= 500) {
//     console.log('you will get a 250 ml coke for free of cost.')
// }else{
//     console.log('you should pay 50tk for a 250 ml coke.')
// }

// bmi calculator

// let weight = 95;
// let height = 1.5;
// let bmi = weight / height ** 2;

// if (bmi < 18.5) {
//     console.log('you are under weight. take healthy food to improve your physical condition.')
// }else if(bmi == 18.5 && bmi <= 24.9)
//     { console.log('you are normal in weight and height value and you are ok.') 
// }else if (bmi > 25 && bmi <= 29) {
//     console.log('you are overweight. control your weight.')
// }else if (bmi > 29 && bmi == 39) {
//     console.log('you are obese. you should strictly follow the hygene rule and must control your weight.')
// }else if (bmi > 39) {
//     console.log('your weight is out or control. sympathy for you.')
// }else{
//     console.log('thank you for calculating bmi.')
// }

// grading calculator

// let marks = 28;
// if (marks >= 80) {
//     console.log('congratulations! you obtained A+.')
// }else if (marks >= 70 && marks <= 79) {
//     console.log('congratulations! you obtained gpa over 4 out of 5. keep it up.')
// }else if (marks >= 60 && marks <= 69) {
//     console.log('your result is gpa 3.5 out of 5. keep cool')
// }
// else if (marks >= 50 && marks <= 59) {
//     console.log('your result is gpa 3 out of 5.')
// }
// else if (marks >= 40 && marks <= 49) {
//     console.log('your result is gpa 2 out of 5.')
// }
// else if (marks >= 33 && marks <= 39) {
//     console.log( 'your result is gpa 1 out of 5. very poor result!')
// }else{
//     console.log('Ops! you are failed. ')
// }


//  nested friend 

let myScore = 85;
let friendScore = 36;

if (myScore >= 80) {
    console.log('let us having lunch in a three star restaurant.')
    if (friendScore <= 60 && friendScore >= 50) {
        console.log('bill will pay my friend.')
    }else if (friendScore <= 50 && friendScore >= 40) {
        console.log('no meeting with my friend.')
    }else if (friendScore < 40) {
        console.log('you are dull student!')
    }else{
        console.log('thank you')
    }
}else{
    console.log('block! no connection with you.')
}