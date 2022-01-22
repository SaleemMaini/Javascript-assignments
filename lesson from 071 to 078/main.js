// // #1

// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let newArray = mix.map(function(ele, index, arr){
//     return isNaN(parseInt(ele)) ? ele : "";
// }).reduce(function(acc,curr){
//     return `${acc}${curr}`;
// })
// console.log(newArray);
// // Elzero

// // #2 
// let myString = "EElllzzzzzzzeroo";

// let newArray = myString.split("").filter(function(ele,index,arr){
//     return ele !== arr[index + 1] ? ele : "";
// }).join("");
// console.log(newArray);
// // Elzero

// // // #3
// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let newArray = myArray.reduce(function(acc, curr){
//     return acc.concat(curr).replace(",","");
// });
// console.log(newArray);


// #4
// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let newArray = numsAndStrings.map(function(ele, index, arr){
//     return -ele;
// }).filter(function(ele,index,arr){
//     return !isNaN(ele);
// });
// console.log(newArray);

// #5

// let nums = [2, 12, 11, 5, 10, 1, 99];

// let newA = nums.reduce(function(acc,curr) { 
//     return curr % 2 == 1 ? acc + curr : acc * curr;
// } , 1)
// console.log(newA)
// // 500

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let zLetter = myString[myString.length - true];

// let solution = myString
// .split("")
// .map(function(ele){
//     return ele.replace("_", " ")
// })
// .filter(function(ele){
//     return ele != "," && isNaN(parseInt(ele)) && ele !== zLetter;
// }).reduce(function (acc, curr){
//     if (acc == curr){
//         return `${acc}`
//     }
//     else{
//         return `${acc}${curr}`
//     }
// })

let solution = myString
.split("")
.map((ele) => ele.replace("_" , " "))
.filter((ele) => ele != "," && isNaN(parseInt(ele)) && ele != zLetter)
.reduce((acc,curr) => (acc == curr ? `${acc}` : `${acc}${curr}`));

console.log(solution); // Elzero Web School