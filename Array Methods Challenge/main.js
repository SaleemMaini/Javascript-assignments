let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];


// my = my.reverse().slice(--counter);

// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// #2

// console.log(my.slice(++zero,counter).reverse()); // ["Elham", "Mazero"];

// #3
// console.log(my[my.indexOf("Elham")].slice(zero, --counter) + my[my.indexOf("Mazero")].slice(my.indexOf("Elham"))); // "Elzero"

// #4

console.log(my[my.indexOf("Mazero")][my.indexOf("Gamal")] + my[my.indexOf("Osama")][my.indexOf("Ahmed")]); // "rO"

