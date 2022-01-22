// #1
// let mySet = new Set([10]);
// mySet.add(20).add(mySet.size);
// console.log(mySet)
// console.log([...mySet].pop())
// console.log([...mySet][mySet.size - 1])

// #2
// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// let mySet = new Set(myFriends)

// console.log([...mySet].sort())

// #3

// let myInfo = {
//     username: "Osama",
//     role: "Admin",
//     country: "Egypt",
//   };

//   let myMap = new Map();

//   myMap.set('username','Osama')
//   myMap.set('role','Admin')
//   myMap.set('country','Egypt')

//   console.log(myMap)
//   console.log(myMap.size)
//   console.log(myMap.has('role'))

// Needed Output
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//   3
//   true

// #4

let theNumber = 100020003000;

// المطلوب إستخدام ال Spread Operator + Set مع ما تعلمته لتخرج برقم 123
// الحل يجب أن يكون في سطر واحد فقط
// ممنوع إستخدام أي ارقام نهائيا
// الناتج النهائي 123 يجب أن يكون Number وليس String

// console.log(
//   Array.from(theNumber.toString(), (n) => {
//     return +n + +n;
//   })
// );

console.log(
  [...new Set(Array.from(theNumber.toString()))].filter(n => n > 0));
