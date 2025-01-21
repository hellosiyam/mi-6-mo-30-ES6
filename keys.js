const object = {
    name : 'Glass',
    age : 25,
    gander : 'male',
    price : 250
};
console.log(object);
const keys = Object.keys(object);
// console.log(keys);

// Value:
const value = Object.values(object);
// console.log(value);

// entries:
const entries = Object.entries(object);
// console.log(entries);

//Delete:
// delete object.age;
// console.log(object);

// Delete 2.0:
// const {age , ...newObject} = object
// console.log(object);

// Freez:
// Object.freeze(object);

// seal:
Object.seal(object);
object.import = 'China';
object.price = 5000;
console.log(object);




