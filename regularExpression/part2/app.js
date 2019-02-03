let re;
// literal characters
re = /hello/i;

// metacharacter symbols
re = /^h/i; // must start with a 'h'
re = /d$/i; // must end with a 'd'
re = /^hello$/i; // must start and end with 'hello'
re = /^h.llo$/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times
re = /gra?a?y/i; // optional character 'e' or 'a'
re = /gra?a?y\?/i; // escape character

// brackets [] - character sets
re = /gr[ae]y/i; // must a be an 'a' or an 'e'
re = /[GF]ray/; // must a be an 'G' or an 'F'
re = /[^GF]ray/; // match anything except a 'G' or 'F'
re = /[A-Z]ray/; // match any uppercase letter
re = /[a-z]ray/; // match any lowercase letter
re = /[A-Za-z]ray/; // match any letter
re = /[0-9]ray/; // match any digit

// braces {} - quantifires
re = /Hel{2}o/i; // 'l' must occur 2 times
re = /Hel{2,4}o/i; // 'l' must occur 2-4 times
re = /Hel{2,}o/i; // 'l' must occur at least 2 times

// Paretheses () - grouping 
re = /([0-9]x){3}/; // must match digit and 'x' 3 times 

// shorthand character classes
re = /\w/; // word character - alphanumeric or _ 
re = /\w+/; // '+' = one or more word characters - alphanumeric or _ 
re = /\W/; // non-word character 
re = /\d/; // match any digit
re = /\d+/; // match any digit 0 or more times
re = /\D/; // match any non digit
re = /\s/; // match white space character
re = /\S/; // match any non-whitespace character
re = /Hell\b/i; // word boundary, matches exact word

// assertions
re = /x(?=y)/; // match x only if followed by y
re = /x(?!y)/; // match x only if its not followed by a y

// String to match
//const str = 'Hello World';
//const str = '10ray';
const str = 'xhfhfy';

// log results
const result = re.exec(str);
console.log(result); 

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);