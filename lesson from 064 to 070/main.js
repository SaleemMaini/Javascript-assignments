// // #1 
// function getDetails(zName, zAge, zCountry) {
//     function namePattern(zName) {
//         // Write Your Code Here
//         // Osama Mohamed => Osama M.
//         // Ahmed ali => Ahmed A.
//           let words = zName.split(" ");
//           let fName = words[0];
//           let sName = words[1].slice(0, 1).toUpperCase();
//           return fName + " " + sName;
//       }
//     function ageWithMessage(zAge) {
//       // Write Your Code Here
//       // 38 Is My Age => Your Age Is 38
//       // 32 Is The Age => Your Age Is 32
//         let age = zAge.slice(0,2);
//         return `Your age is ${age}`;

//     }
//     function countryTwoLetters(zCountry) {
//       // Write Your Code Here
//       // Egypt => You Live In EG
//       // Syria => You Live In SY
//         let countryCode = zCountry.slice(0,2).toUpperCase();
//         return `You Live In ${countryCode}`;
//     }
//     function fullDetails() {
//       // Write Your Code Here

//         return namePattern(zName) + ", " + ageWithMessage(zAge) + ", " + countryTwoLetters(zCountry);
//     }
//     return fullDetails(); // Do Not Edit This
//   }
  
//   console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
//   // Hello Osama M., Your Age Is 38, You Live In EG
  
//   console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
//   // Hello Ahmed A., Your Age Is 32, You Live In SY

// #2

// function itsMe() {
//     return `Iam A Normal Function`;
//   }
    // let itsMe = () => `Iam A Normal Function`;
    // console.log(itsMe()); // Iam A Normal Function

    // function urlCreate(protocol, web, tld) {
    //     return `${protocol}://www.${web}.${tld}`;
    //   }
    //   let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
    //   console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

    // function checker(zName) {
    //     return function (status) {
    //       return function (salary) {
    //         return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    //       };
    //     };
    //   }
    // let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    //   console.log(checker("Osama")("Available")(4000)); // My Salary Is 4000
    //   console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

    // #3
//     function specialMix(...data) {
//         // Your Code Here
//         let rs = 0;
//         for (i=0; i<data.length; i++){
//             if (typeof data[i] == "number"){
//                 rs += data[i];
//             }
//             else {
//                 let d = parseInt(data[i].slice(0,2));
//                 if (isNaN(d)) {
//                     continue;
//                 }
//                 else {
//                     rs += d;
//                 }
//             }
//         }
//         return rs == 0 ? "All is string" : rs;
// }
//       console.log(specialMix(10, 20, 30)); // 60
//       console.log(specialMix("10Test", "Testing", "20Cool")); // 30
//       console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
//       console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

// // Challeng 1
// let names = function (...data) {
//     return `[${data.join("] , [")}]`;
// }

// let names = (...data) => `[${data.join("] , [")}]`;

// console.log(names("Saleem" , "Ahmed", "ffff","dsdsd"));

// 2
let myNums = [20,50,10,60];

let calc = (one, two, ...nums) => one + two + parseInt(nums);

console.log(calc(10,myNums[3],myNums[2])); // 80
