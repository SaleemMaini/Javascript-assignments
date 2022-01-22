let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1

console.log(myFriends.slice(myFriends,num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// #2

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"];

// #3

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// #4

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[words.length -1][0].toUpperCase().substr(2)); // ZERO

// #5

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
// 1
if (haystack.includes(needle))
        console.log("Found ");
    else
        console.log("not Found ");
// 2

if (haystack.indexOf(needle) != -1)
        console.log("Found ");
    else
        console.log("not Found ");
// 3

if (haystack.lastIndexOf(needle) != -1)
        console.log("Found ");
    else
        console.log("not Found ");

// # 6

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
arr1.shift();
arr1.shift();
arr2.shift();
arr2.shift();
allArrs = arr1.concat(arr2).sort().join("").toLowerCase();

console.log(allArrs); // fxy