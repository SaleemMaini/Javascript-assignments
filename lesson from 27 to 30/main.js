// #1
let name = "emad";
console.log(name[0]); // e
console.log(name.charAt(0)); // e
console.log(name.charAt(name.length - 4)); // e
console.log(name.slice(0,1)); // e
console.log(name.substring(0,1)); // e
console.log(name.charAt(0).repeat(3)); // eee

// #2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes("z")); // True
console.log(word.startsWith("E")); // True
console.log(word.endsWith("o")); // True

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3,6)); // Zero

// 8 H
console.log(a.charAt(13).repeat(8).toUpperCase()); // HHHHHHHH

// Return Array
console.log(a.split(" ",1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0,6) + ` ${a}`.substr(11,16)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
//console.log(a.charAt(0).toLowerCase() + a.slice(1)) + a.charAt(a.length - 1).; // eLZERO WEB SCHOOl
console.log(a.charAt(0).toLowerCase() + a.slice(1,-1).toUpperCase() + a.charAt(a.length - 1).toLowerCase()); // eLZERO WEB SCHOOl