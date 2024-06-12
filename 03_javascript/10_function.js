// function declaration
// syntax : 
// function functionName() {}
function add1(a, b) {
    return a + b;
}

console.log("add1(1, 2) = " + add1(1, 2));

// function expression
// syntax : 
// var functionName = function() {}
var add2 = function(a, b) {
    return a + b;
}

console.log("add2(1, 2) = " + add2(1, 2));



// arguments object
// arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
// arguments is not an Array. It is similar to an Array, but does not have any Array properties except length.
function sumAll() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log("sumAll(1, 2, 3, 4) = " + sumAll(1, 2, 3, 4));
console.log("sumAll(1, 2, 3, 4, 5) = " + sumAll(1, 2, 3, 4, 5));







