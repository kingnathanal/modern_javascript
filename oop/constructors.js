// Constructors in different ways

// String
const name1 = 'Jeff';
const name2 = new String('Jeff');

console.log(name1);
console.log(name2);

console.log(typeof name1); //string
console.log(typeof name2); // object

if(name2 === 'Jeff'){
    console.log('YES');
} else {
    console.log('NO');
}

// Number 
const num1 = 5; 
const num2 = new Number(5);

console.log(typeof num1);
console.log(typeof num2);

// boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function(x,y){
    return x+y;
}

const getSum2 = new Function('x','y','return x + y');

console.clear();
console.log(getSum1(1,1));
console.log(getSum2(1,1));

// Object 
const john1 = {
    name: 'John'
};
const john2 = new Object({name: "John"});

console.log(john1);
console.log(john2);

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

// Regular Expression
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re1);
console.log(re2);
