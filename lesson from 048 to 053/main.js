// //  #1
// let start = 10;
// let end = 100;
// let exclude = 40;

// // Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

// for (i=start; i<=end; i+=start){
//     if (i != exclude){
//         document.write(`<p>${i}</p>`);
//     }
    
// 

// // #2

// let start = 10;
// let end = 0;
// let stop = 3;

// // Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

// for (j=start; j>=stop; j--){
//     if(j<10)
//         document.write(`<p>${end}${j}</p>`); 
//     else
//     document.write(`<p>${j}</p>`);
// }

// #3

// let start = 1;
// let end = 6;
// let breaker = 2;

// // Output
// // 1
// // -- 2
// // -- 4
// // 2
// // -- 2
// // -- 4
// // 3
// // -- 2
// // -- 4
// // 4
// // -- 2
// // -- 4
// // 5
// // -- 2
// // -- 4
// // 6
// // -- 2
// // -- 4

// for (k=start; k<= end; k++) {
//     document.write(`<p> ${k} </p>`);
//     for(j=breaker;j<end;j+=breaker) {
//         document.write(`<p>-- ${j}</p>`)
//     }
// }

// // #4
// let index = 10;
// let jump = 2;
// let end = 0;

// for (;;) {
//   // Write Your Code Here
//   if (index == end || index ==jump)
//   {
//       break;
//   }
//   else {
//     console.log(`${index}`);
//     index -= jump;
//   }
// }

// // // Output
// // 10
// // 8
// // 6
// // 4

// // #6
// let start = 0;
// let swappedName = "elZerO";
// let newWord = '';
// for (i=start;i<swappedName.length;i++){
//     if(swappedName[i] == swappedName[i].toUpperCase())
//     newWord += swappedName[i].toLowerCase();    
//     else
//     newWord += swappedName[i].toUpperCase();
//     if (newWord.length == swappedName.length)
//     console.log(newWord);
// }
// // Output
// "ELzERo"

// #7
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// // Output
// 2
// 3
// 4

for(i=start;i<mix.length;i++){
    if (mix[i] != mix[start] && typeof mix[i] == "number")
    console.log(mix[i]);
}