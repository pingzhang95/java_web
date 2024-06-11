// javascript is weakly typed language.
// var is a keyword that is used to declare a variable in javascript.
// var is a global scope variable.
// var can be re-declared and updated.
// var can be used without initialization.
// var can be used before declaration.
// var can be hoisted.

console.log("var can be re-declared")
var a = 10;
console.log("a = " + a)
var a = "re-declared";
console.log("a = " + a)

console.log("\nvar can be updated")
var b = 10;
console.log("b = " + b)
b = "updated";
console.log("b = " + b)

console.log("\nvar can be used without initialization.");
var c;
console.log("c = " + c);

console.log("\nvar can be used before declaration.");
d = 10;
console.log("d = " + d);
var d;

