let primeNumbersArray = []

const isPrime = (number) => {
    for (let i = 2; i < number; i++)
        if (number % i === 0) {
            return false;           
        }
    return number > 1;
};

const primeNumbers = (num)=>{
    for (let i = 0; i <= num; i++) {
        if(isPrime(i)){
            primeNumbersArray.push(i)
        }
    }
    return primeNumbersArray
}

console.log(primeNumbers(25));




