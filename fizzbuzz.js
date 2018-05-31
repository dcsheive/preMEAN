function fizzBuzz(num) {
    if (!Number.isInteger(num)){   
        console.log('Enter a positive number!')
    }
    else {
        for(var i = 1; i<num+1; i++){
            if (i%3==0 && i%5!=0){
                console.log('Fizz');
            }
            else if (i%5==0 && i%3!=0){
                console.log('Buzz');
            }
            else if (i%15==0){
                console.log('FizzBuzz');
            }
            else {
                console.log(i);
            }
        }
    }
}
fizzBuzz(15);
fizzBuzz('fifteen');