
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,  90, 87,  76,  65, 54, 43, 32, 21];
// for of loop
// for (number of numbers) {
//     console.log(number)
// } // this loop is active

// // for loop
// for (let index = 0; index < numbers.length; index++) {
//     // const element = array[index];
//     console.log(index)
// } // this loop is also active

// while loop

// let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9,  90, 87,  76,  65, 54, 43, 32, 21];

// while (numbers1 < numbers1.length) {
//     console.log('result is printing');
//     numbers = numbers + 1;
// }

// let num = 1;
// while (num < 10) {
//     console.log('result is printing');
//     num++;
// }

// let num1 = 1;
// let sum = 0;

// while (num1 <= 10) {
//     console.log(num1);
//     // num1++; // it shows one type of output
//     sum = sum + num1;
//     console.log('sum of numbers is :', sum);  // shows result every loop
//     num1 += 1; // it shows another output
// }
//   console.log('sum of numbers is :', sum); // shows only one result

// let num2 = 2; // this code result shows true or false
// let even = num2 % 2 == 0;
// while (num2 <= 20) {
//     console.log(even);
//     num2++;
// }

// let num3 = 1;

// while (num3 <= 20) {
//     // console.log(num3);
//     num3++;
//     if (num3% 2 === 0) { // finding even numbers
//         console.log('even number is : ', num3); 
//     } 

//     if (num3 % 2 === 1) { // finding odd numbers
//         console.log('odd number is : ', num3);
//     }
// }

// let num4 = 0;
// for (let num4 = 0; num4 <= 20; num4++) {
//     console.log(num4);
// }

// for(let num5 = 0; num5 <=40; num5 += 2){
//     console.log( 'even numbers are : ', num5);
// }
// for(let num5 = 1; num5 <=40; num5 += 2){
//     console.log( 'odd numbers are : ', num5);
// }


// find sum of numbers using for loop

// let sum = 0;
// for(let i = 0; i <= 20; i++){
//     sum = sum + i;
//     // console.log(i);
//     // console.log(sum) // this line shows result in every loop
// }
// console.log(sum); // this line shows only one result


// decrement using for loop

// for(let i = 20; i >= 5; i--){
//     console.log(i);
// }

// decrement using while loop

// let n = 25;
// while (n >= 5) {
//     console.log(n);
//     n--;
// }

// finding odd numbers using for loop
// method : 1

// for(let i = 1; i <= 20; i += 2){
//     console.log(i);
// }

// method 2

// for(let i = 0; i <= 20; i++){
//     if (i % 2 == 1) {
//         console.log(i);
//     }
// }

// method 3

// for(let i = 0; i <= 20; i++){
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }

// finding odd number using while loop

// method 1

// let nm = 1;
// while (nm <= 20) {
//     console.log(nm);
//     nm += 2;
// }

// method 2

// let nmm = 0;
// while (nmm <= 20) {
//     if(nmm %  2 == 1){
//         console.log(nmm);
        
//     }
//     nmm++;
// }

// method 3
// let nmmm = 0;
// while (nmmm <= 20) {
//     if(nmmm %  2 != 0){
//         console.log(nmmm);
        
//     }
//     nmmm++;
// }

// finding even numbers using for loop

// method 1

// for( let i = 0; i <= 20; i += 2){
//     console.log(i);
// }

// method 2

// for( let i = 0; i <= 20; i++){
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// method 3

// for(let i = 0; i <= 20; i++){
//     if (i % 2 !== 1) {
//         console.log(i);
//     }
// }


// finding even numbers using while loop

// method 1

// let a = 0;
// while (a <= 20) {
//     console.log(a);
//     a += 2;
// }

// method 2

// let b = 0;
// while (b <= 20) {
//     if (b % 2 === 0) {
//         console.log(b);
//     }
//     b++;
// }

// method 3

let c = 0;
while (c <= 20) {
    if (c % 2 !== 1) {
        console.log(c);
    }
    c++;
}