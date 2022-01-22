// // #1
// console.log("1"); // 1

// let numOne = 9;
// // Condition Output => "009"
// if (numOne < 10) {
//     console.log(`00${numOne}`);
// } else {
//     console.log("false");
// }

// let numTwo = 20;
// // Condition Output => "020"
// let res = numTwo > 10 && numTwo < 100 ? `0${numTwo}` : 'false';
// console.log(res);

// let numThree = 110;
// // Condition Output => "110"
// let result = numThree >= 100 ? `${numThree}` : `false`;
// console.log(result);

// // #2
// console.log("2"); // 2

// let num1 = 9;
// let str = "9";
// let num2 = "20";

// num1 == str ? console.log("{num1} Is The Same Value As {str}") : console.log("flase");

// num1 == str
// && typeof num1 != typeof str
// ? console.log("{num1} Is The Same Value As {str} But Not The Same Type")
// : console.log("flase");

// num1 !== num2 
// ? console.log("{num1} Is Not The Same Value Or The Same Type As {num2}")
// : console.log("false");

// // Output
// "{num1} Is The Same Value As {str}"
// "{num1} Is The Same Value As {str} But Not The Same Type"
// "{num1} Is Not The Same Value Or The Same Type As {num2}"


// #4
console.log("4"); // 4

// Edit What You Want Here

var num1 = 11;
var num2 = 10;
var num3 = 11;
var num4 = 33;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}