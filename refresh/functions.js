// Function declarations

function greet(firstName = 'John', lastName = 'Doe'){
    //if(typeof lastName === 'undefined') {lastName = 'Doe'}
    //console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('John'));

// function expressions
const square = function(x = 3){
    return x*x;
};

//console.log(square());
console.clear();

// immidiatley invokable function expressions - iifes
(function(name){
    console.log('Hello ' + name);
})('Brad');

console.clear();

// property methods
const todo = {
    add: function() {
        console.log('Add todo...');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();