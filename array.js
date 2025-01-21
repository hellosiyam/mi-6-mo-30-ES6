const numbers = [2, 5, 8, 6];
let sum = 0;

for (let num of numbers) {
    sum+=num
}

console.log(sum); 


const nums = [2, 5, 8, 6];
const incrementedNumbers = [];

for (let num of nums) {
    let number = num++;
    incrementedNumbers.push(number);
}

console.log(incrementedNumbers);


const num1 = [2, 5, 8, 6];
const sum1 = num1.reduce((number1, number2) => number1 + number2);

console.log(sum, "The sum is");

