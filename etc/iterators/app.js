// // iterator example
// function nameIterator(names) {
//     let nextIndex = 0;

//     return {
//         next: function() {
//             return nextIndex < names.length ? {value: names[nextIndex++], done: false} : {done: true};
//         }
//     }
// }

// // create an array of names
// const namesArr = ['Jack', 'Jill', 'John'];
// // init iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());

// generator example 
function* sayNames() {
    yield 'Jack';
    yield 'JIll';
    yield 'John';
}

const name = sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

// id creator
function* createIds() {
    let index = 0;

    while(true) {
        yield index++;
    }
}

const get = createIds();

console.log(get.next().value);
console.log(get.next().value);
console.log(get.next().value);
console.log(get.next().value);
console.log(get.next().value);
console.log(get.next().value);