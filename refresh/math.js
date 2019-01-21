const num1 = 100;
const num2 = 50;
let val;

// Simple Math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// math object
val = Math.PI; // 3.14... 
val = Math.E; // 2.7...
val = Math.round(2.8); // 3
val = Math.ceil(2.4); // 3
val = Math.floor(2.8); // 2
val = Math.sqrt(64); // 8 
val = Math.abs(-3); // 3
val = Math.pow(8, 2); // 64
val = Math.min(2,33,4,1,55,6,3); // 1
val = Math.max(2,33,4,1,55,6,3); // 55
val = Math.random(); // random number 8.9283832
val = Math.floor(Math.random() * 20 + 1); // random number 8 & between 1 and 20 

console.log(val);