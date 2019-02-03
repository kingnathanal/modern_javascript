let re;
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global search

//console.log(re);
//console.log(re.source);

// exec - return result in an array or null
// const result = re.exec('hello world');
// const result2 = re.exec('me world');

// console.log(result); // match
// console.log(result2); // no match 

// test - returns true or false
// const result = re.test('Hello');
// console.log(result);

// match() - return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// search - return index of the first match if not found returns -1
// const str = 'Hello There';
// const result = str.search(re);
// console.log(result);

// replace - return new string with some or all matches of a pattern
const str = 'Hello There';
const newStr = str.replace(re, 'Hi');
console.log(newStr);