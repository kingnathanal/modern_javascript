// const sayHello = function() {
//     console.log('Hello');
// }

// arrow function, no need for function keyword
// const sayHello = () =>  {
//     console.log('Hello');
// }

// one line function, no braces
//const sayHello = () => console.log('Hello');

// returning value
//const sayHello = () => 'Hello';

// returning a object
//const sayHello = () => ({msg: 'Hello'});

// passing a single param
//const sayHello = (name) => console.log(`Hello ${name}`);

// single params do not need parenthesis
//const sayHello = name => console.log(`Hello ${name}`);

// passing multiple params, need parenthesis
//const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

//sayHello('Brad','Traversy');
//console.log(sayHello());

const users = ['Nathan','John','William'];

// const nameLengths = users.map(function(name) {
//     return name.length;
// });

// shorter
// const nameLengths = users.map((name) => {
//     return name.length; 
// });

// shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);