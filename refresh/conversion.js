let val;

// number to string
//val = 5;
val = String(555);
val = String(4+4);
// bool to string
val = String(true);
// date to string
val = String(new Date());
// array to string
val = String([1,2,3,4]);
// toString()
val = (5).toString();
val = (true).toString();

// String to numnber
val = Number('5'); // 5
val = Number(true); // 1
val = Number(false); // 0
val = Number(null); // 0
val = Number('hello'); // NaN - Not a Number
val = Number([1,2,3]); // NaN - Not a Number

val = parseInt('100.30'); // 100
val = parseFloat('100.30'); // 100.3

console.log(val);
console.log(typeof val);
//console.log(val.length); // works with strings 
console.log(val.toFixed(2)); // works with numbers
console.clear();

const val1 = String(5);
const val2 = 6; 
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);
