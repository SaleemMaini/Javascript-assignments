let theBiggest = ["Aa" , "ssss" , "dddddddddddddd" , "sda" , "sqw"];

let check = theBiggest.reduce(function (acc,current){
    return acc.length > current.length ? acc : current;
});
console.log(check);

let removeChars = ["S" , "@" , "L" , "@" , "E" , "@" , "M"];

let finalString = removeChars.filter(function(ele){
    return !ele.startsWith("@");
})
.reduce(function(acc, curr){
    return `${acc}${curr}`; 
});
console.log(finalString);