function coinChange(num){
    var tempNum= 0;
    if(typeof(num)== 'object'){
        if (num['dollars']){
            tempNum+=num['dollars']*100;
        }
        if (num['quarters']){
            tempNum+=num['quarters']*25;
        }
        if (num['dimes']){
            tempNum+=num['dimes']*10;
        }
        if (num['nickels']){
            tempNum+=num['nickels']*5;
        }
        if (num['pennies']){
            tempNum+=num['pennies'];
        }
        num = tempNum
    }
    var result= {};
    if (Math.trunc(num/100)>0){
        result['dollars']= Math.trunc(num/100);
    }
    if ( Math.trunc(num%100/25)>0){
        result['quarters']= Math.trunc(num%100/25);
    }
    if (Math.trunc(num%100%25/10)>0){
        result['dimes']= Math.trunc(num%100%25/10);
    }
    if (Math.trunc(num%100%25%10/5)>0){
        result['nickels']= Math.trunc(num%100%25%10/5);
    }
    if (num%100%25%10%5>0){
        result['pennies']= num%100%25%10%5
    }
    return result;
}
console.log(coinChange(312));
console.log(coinChange(78));
console.log(coinChange({dollars: 2, dimes: 15, pennies: 5}));

