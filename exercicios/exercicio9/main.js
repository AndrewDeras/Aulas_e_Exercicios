let numbers = [];
let newPrimeNumbersArray = []
let individualNum = 0;

let numbersArray = (num) => {
    for (let i = 0; i < num; i++) {
        numbers.push(i)
    }
}

numbersArray(10);

console.log(numbers);

const primeNumbersArray = numbers.filter((number) => {
    for (let i = 2; i < number; i++)
        if (number % i === 0) {
            return newPrimeNumbersArray.push(number);
        }
})

primeNumbersArray
