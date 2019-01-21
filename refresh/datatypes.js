// primitive types

// string
const name = 'John Doe';
console.log(typeof name);
// number
const age = 45;
console.log(typeof age);
// boolean
const hasKids = true;
console.log(typeof hasKids);
// null or object
const car = null;
console.log(typeof car);
// undefined
let test;
console.log(typeof test);
// symbol
const sym = Symbol();
console.log(typeof sym);
console.clear();

// Reference Types - objects accessed from memory
// Array
const hobbies = ['movies','music'];
console.log(typeof hobbies);

const address = {
    city: 'Boston',
    state: 'MA'
}
console.log(typeof address);

const today = new Date();
console.log(today);
console.log(typeof today);
