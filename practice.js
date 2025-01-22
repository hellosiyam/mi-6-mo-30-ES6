// Problem-1:

// Task-1:
const task1 = (num1, num2, num3) => num1 * num2 * num3;
const mul = task1(2, 4, 6);
// console.log(mul);

// Task-2:
// const task2 = () =>`
// I am a web devlopre.
// I love to code.
// I love to eat biryani.
// `
// console.log(task2());
const task2 =`
    I am a web devlopre.
    I love to code.
    I love to eat biryani.
`
// console.log(task2);

// Task-3:
const task3 = (num1, num2=10)=> num1 + num2;
const sum = task3(5);
// console.log(sum);

// Problem-2:
const friends = ['Rohul', 'asif', 'abir', 'nabil'];
let arry = [];
const problem2 = ()=>{
    for(const friend of friends){
        if (friend.length % 2 === 0) {
            arry.push(friend)
        } 
    }
    return arry;
}
// console.log(problem2());

// Problem-3:
const numbers = [10, 15, 20, 25, 30, 35];
let total = 0
const problem3 = () =>{
    for(const num of numbers){
        const square = num * num;
        total+=square;
    }
    const avg = total / numbers.length;
    return avg
}
// console.log(problem3());


// Problem-4:
const array1 = [10, 15, 20, 25, 30];
const array2 = [35, 40, 45, 50, 55];
const combine = [...array1, ...array2];
const problem4 = ()=>{
    const maxNumber = Math.max(...combine)
    return maxNumber
}
console.log(problem4());


