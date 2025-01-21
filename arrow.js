// 1
function num(num1, num2) {
    return num1 +num2
}
const sum = num(20, 10);
console.log(sum);

// 2
const add = function (a1, a2) {
    return a1 + a2
}
const add2 = add(1,2);
console.log(add2);

// 3
const sum2 = (num1, num2) => num1 + num2;
const sum3 =sum2(10, 20);
console.log('array function:', sum3);
