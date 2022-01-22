// #1

let num_one = 10;
let num_two = 20;

// Normal Concatenate => 1020
console.log(num_one + "" + num_two);

// Normal Concatenate => String
console.log(num_one + "" + num_two + typeof ""); 

// Template Literals Way => 1020
console.log(`${num_one}${num_two}`);

// Template Literals Way => String
console.log(typeof `${num_one}${num_two}`);

/*
  Normal Concatenate
  20
  10
*/
console.log(num_one +
           "\n" + num_two);

/*
  Template Literals Way
  20
  10
*/

console.log(`${num_one}
${num_two}`);

// #2
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

// #3

`I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""`

console.log("\`I\'m In\n \\\\ \n Love \\\\ \"\"\" \'\'\' \n \++ With \++ \n \\\"\"\"\\\"\"\" \n \"\"javascript\"\" \`");

// 4

let a = 21;
let b = 20;

// _21_2021_2021_2021_20_
console.log(`
_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`)
