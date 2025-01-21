// Dubble peramitter:
const dubblePeramiter = (num1, num2)=> num1 + num2;
const dubblePeramiterSum = dubblePeramiter(20, 30);
console.log(dubblePeramiterSum);

// single peramitter:
const singlePeramitter = (numbers) => numbers[2];
const numberArray = singlePeramitter([10, 15, 20, 25, 30, 35, 40, 45, 50]);
console.log(numberArray);

// single peramitter:
const singlePeramitter2 = numbers => numbers.age;
const stydentArray = singlePeramitter2({name:'siyam', age: 45});
console.log('Student age is:',stydentArray);

// Empty peramitter:
const emptyPeramitter = () => Math.PI;
console.log('Emptu peramitter value is :', emptyPeramitter());

// multiply peramitter:
const multiplyPeramitter = (num1, num2, num3) => {
    const sum = num1 + num2 + num3;
    const mul = num1 * num2 * num3;
    const fist2 = sum + mul;
    return fist2
}
const multiplyValue = multiplyPeramitter(2, 4, 6);
console.log(multiplyValue);



