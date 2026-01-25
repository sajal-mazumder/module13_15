// var, let and const
// var age = 20;
// var age = 23;
// we can use same name multiple using var.

// let price = 23;
// price = 30;
// let price = 45;  we cannot declare same name multiple using let, it shows an error.
// console.log(price)

// const number = 34;
// number = 35; we cannot update same name value using const.
// console.log(number);

// data type 1. primitive data: number, string, boolean, integer, float
// let num = 23;
// let sTring = 'sajal';
// let flOat = 23.5;
// let boolEan = true;
// let Int = 25;
// convert float number to integer
// let Float = 23.4;
// let inte = parseInt(Float); technique 01
// console.log(inte)
// console.log(parseInt.Float) not working

// let intg = 23; // 
// let flOAt = parseFloat(intg); // convert integer to float 
// console.log(flOAt)

// checking type of
// let num1 = 12;
// console.log( typeof num1);
// let name = 'sajal';
// console.log( typeof name);
// let isHappy = true;
// console.log( typeof isHappy);
// let num2 = 34.5;
// console.log( typeof num2)

// convert num to string and string to num
// let num3 = 20;
// let newNum = toString.num3;
// console.log(newNum)

// let num4 = '23';
// let num44 = parseInt(num4);
// console.log(num44); // result : 23

// let namee = 'sajal';
// namee = parseInt(namee); 
// console.log(namee); // NaN 

// tofixed method
// let nm1 = 0.1;
// let nm2 = 0.2;
// console.log(nm1 + nm2); // result: 0.30000000000000004, to control it we can use tofixed method
// console.log((nm1 + nm2).toFixed(3)) // now the result is 0.300 and it act as string.


// concat numbers : it works only addition operator. 
let nm3 = '23';
let nm4 = 45;
let total = nm3 + nm4;
console.log(total); // result is : 2345;

let nm5 = '45';
let nm6 = 25;
let sub = nm5 - nm6;
console.log(sub);
console.log(nm5 * nm6);
console.log(nm5 / nm6);


