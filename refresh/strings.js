const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';

let val;

val = firstName + lastName; 

// concatenation
val = firstName + ' ' + lastName;

// appending
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// escaping
val = "Thats's awesome, I can't wait";
val = 'Thats\'s awesome, I can\'t wait';

// length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0]; // W

// indexOf()
val = firstName.indexOf('l'); // 2

// charAt()
val = firstName.charAt(2); // l
val = firstName.charAt(firstName.length -1); // m

// substring()
val = firstName.substring(0,4); // Will

// slice
val = firstName.slice(0,4); // Will
val = firstName.slice(-3); // iam

// split
val = str.split(' ');

// replace()
val = str.replace('Brad','Jack');

// includes()
val = str.includes('Hello'); // true
val = str.includes('foo'); // false

console.log(val);