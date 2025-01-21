const numArry = [10, 15, 20, 25, 30, 35];
const largestNum = Math.max(...numArry);
// console.log(...numArry);
// console.log(largestNum);

const number = [10, 15, 20, 25, 30, ]
const number2 = number;
const number3 = [...number2];
number.push(40);
console.log('num-1',number);
console.log('num-2',number2);
console.log('num-3',number3);

const number4 = [900, ...number]
console.log('num-4 :', number4);

const array = [10, 5, 15, 20];
const sum = array.reduce((firstnum, lastNumber) => firstnum + lastNumber, 0);
console.log(sum);








