// // #1
// function sayHello(theName, theGender) {
//     // Your Code Here
//     theGender == "Male" ?
//     console.log(`Hello Mr ${theName}`) :
//     theGender == "Female" ?
//     console.log(`Hello Miss ${theName}`) :
//     console.log(`Hello ${theName}`)  
//   }
  
//   // Needed Output
//   sayHello("Osama", "Male"); // "Hello Mr Osama"
//   sayHello("Eman", "Female"); // "Hello Miss Eman"
//   sayHello("Sameh"); // "Hello Sameh"

// // #2
// function calculate(firstNum, secondNum, operation) {
//     // Your Code Here
//     typeof secondNum === "undefined" ?
//     console.log("Second Number Not Found") :
//     operation == "subtract" ?
//     console.log(firstNum - secondNum) :
//     operation == "multiply" ?
//     console.log(firstNum * secondNum) :
//     console.log(firstNum + secondNum);
//   }
  
//   // Needed Output
//   calculate(20); // Second Number Not Found
//   calculate(20, 30); // 50
//   calculate(20, 30, 'add'); // 50
//   calculate(20, 30, 'subtract'); // -10
//   calculate(20, 30, 'multiply'); // 600

// // #Function Challenge

// function checkStatus(a, b, c) {
//         // Your Code Here
//         let arrgs = [a,b,c],
//         name , age , status;
//         for (i = 0; i < 3; i++){
//             typeof arrgs[i] === "string" ?
//             name = arrgs[i] :
//             typeof arrgs[i] === "number" ?
//             age = arrgs[i] :
//             typeof arrgs[i] === "boolean" ?
//             status = arrgs[i] :
//             console.log("incorrect data type");
//         }
//         status == true ?
//         console.log(`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`) :
//         console.log(`Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`);
//     }

//   // Needed Output
//   checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//   checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//   checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//   checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// #05

// function createSelectBox(startYear, endYear) {
//     // Your Code Here
//     document.write(`<select>`);
//     for(i = startYear; i <= endYear; i++) {
//         document.write(`<option value=${i}>${i}</option>`);
//     }
//     document.write(`</select>`);
// }
//     createSelectBox(2000, 2021);

function multiply(...nums){
    let rs = 1;
    for (i=0; i< nums.length; i++){
        if (typeof nums[i] === "string"){
            continue;
        }
        rs *= Math.floor(nums[i]);
    }
    console.log(rs)
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000