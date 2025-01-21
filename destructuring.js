const object = {
    name : 'SIYAM',
    number : '01516566293', 
    roll : 15,
};
const {number, roll: rol} = object;
// console.log(number, rol);

const array = [10, 15];
const [x, y] = array;
console.log(x, y);

// 
function distruting(num1, num2) {
    return [num1*2, num2*2]
}
const [first, second] = distruting(10,15);
console.log(first, second);


