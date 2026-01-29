


// if (isLeader === true ) {
    //     price = price / 2;
    //     // console.log(price)
    // }else{
        //     price = price + price * 5/100;
        //     console.log(price)
        // }
        
        // we can write this multi line code in one line using ternary 
        
        // price >= 500 ? console.log('pay full payment') : console.log('pay 10% discount')
        
        // price = isLeader === true? console.log('pay for only 100') : console.log( 'pay full taka')
        
        // nested code in a ternary operator
let price = 1000;
let isLeader = false;       
       
if (price > 300) {
    if (isLeader === true) {
        console.log('pay on 50% discount')
    }else if(isLeader === false){
        console.log("pay on 10% discount")
    }
}else{
    console.log('pay full payment')
}