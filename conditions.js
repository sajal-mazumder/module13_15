
// if condition 

let age = 25;
let quality = 'bcs';
let height = 65;
let hasCar = true;

if(age >=25){
    console.log('able to marry')
}else{
    console.log('go to bari')
}

if(age > 26 && quality == 'bcs'){
    console.log('ready to be groom')
}else{
    console.log('wait for next year')
}

if ((age == 25 && hasCar == true)|| (quality == 'bcs' && height > 60)) {
    console.log('you are perfect for becoming a groom')
}
if ((age == 25 && hasCar == true) && (quality == 'bcs' && height > 70)) {
    console.log('you are perfect for becoming a groom')
}else{
    console.log('wait for more times')
}