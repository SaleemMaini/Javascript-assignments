


let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["Html", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 14, available: true, skills: ["PHP", "Laravel"] },
];

let [{title, age, available, skills: [, cs]}] = myFriends;

if (chosen === 1) {
  [{title, age, available, skills: [, cs]}] = myFriends
}
if (chosen === 2) {
  [,{title, age, available, skills: [, cs]}] = myFriends
}
if (chosen === 3) {
  [,,{title, age, available, skills: [, cs]}] = myFriends
}

if (available == false) {
  available = "Not available"
} else {
  available = "Available"
}

console.log(title)
console.log(age)
console.log(available)
console.log(cs)