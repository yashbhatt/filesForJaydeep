var number1 = 11;

function isPrime (number1) {
    if (number1 == 1) {
        console.log('sneaky huh');
    }
    for (var i = 0; i <= number1; i++) {
        if (number1 % i == 0) {
            console.log('this is not a prime number');
            break;
        }else {
            console.log('this is a prime number.')
        }
    }
}