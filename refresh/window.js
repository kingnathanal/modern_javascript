// window methods / objects / properties

// alert
//alert('Hello World');

// Prompt
//const input = prompt();
//alert(input);

// confirm
// if(confirm('Are you sure')){
//     console.log('YES');
// }

let val;

// outer height and width
val = window.outerHeight;
val = window.outerWidth;
// inner height and width
val = window.innerHeight;
val = window.innerWidth;
// scroll points
val = window.scrollY;
val = window.scrollX;

// location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
//window.location.href = 'http://google.com';
// reload
//window.location.reload();

// history object
//window.history.go(-1);
//val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform; 
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);