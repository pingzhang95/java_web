// NaN is false
if (NaN){
    console.log("NaN is true");
} else {
    console.log("NaN is false");
}

// number 0 is false
if (0){
    console.log("0 is true");
} else {
    console.log("0 is false");
}

// number 1 is true
if (2){
    console.log("2 is true");
} else {
    console.log("2 is false");  
}

// number 1.2 is true
if (1.3){
    console.log("1.2 is true");
} else {
    console.log("1.2 is false");
}

// Infinity is true
if (Infinity){
    console.log("Infinity is true");
} else {
    console.log("Infinity is false");
}


// string "" is false
if (""){
    console.log("\"\" is true");
} else {
    console.log("\"\" is false");
}

// string " " is true
if ("balabala"){
    console.log("\"balabala\" is true");
} else {
    console.log("\"balabala\" is false");
}

// null is false
if (null){
    console.log("null is true");
} else { 
    console.log("null is false");
}

// undefined is false
if (undefined){
    console.log("undefined is true");
} else {
    console.log("undefined is false");
}

// function is true
if (function(){}) {
    console.log("function is true");
} else {
    console.log("function is false");
}

// array is true
if ([]) {
    console.log("array is true");
} else {
    console.log("array is false");
}

// object is true
if ({}) {
    console.log("object is true");
} else {
    console.log("object is false");
}