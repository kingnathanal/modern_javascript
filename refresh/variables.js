//ES5, ES2015 - ES6
// var, let, const 

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // var's can only have letters, numbers, _, $
// // var's can not start with number

// // Mult word vars 
// var firstName = 'John'; // Camel Case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case

// let
// let name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// const
//const name = 'John';
//console.log(name);
// Can not be reassigned
//name = 'Sara';
// Have to assign a value
//const greeting;

const person = {
    name: 'John',
    age: 30 
}
console.log(person);
person.name = 'Sara';
person.age = 32; 
console.log(person);
console.clear();

const numbers = [1,2,3,4,5];
numbers.push(6);
// Cant redo numbers like
// error - numbers = [1,2,3];
console.log(numbers);