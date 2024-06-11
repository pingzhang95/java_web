// for loop is used to iterate over a block of code multiple times.
// Syntax: 
// for (initialization; condition; increment/decrement) { 
//     // code block to be executed 
// }
//
// initialization: It is executed before the loop starts.
// condition: It is executed before each iteration. If it returns true, the code block is executed.
// increment/decrement: It is executed after the code block has been executed.

var arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}   // 1 2 3 4 5

for (var i in arr) {
    console.log(arr[i]);
}   // 1 2 3 4 5