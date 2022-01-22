let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let select = document.getElementById("e");

let update = () => {
  window.sessionStorage.setItem("a", a.value);
  window.sessionStorage.setItem("b", b.value);
  window.sessionStorage.setItem("c", c.value);
  window.sessionStorage.setItem("e", e.value);
}
a.value = window.sessionStorage.getItem('a');
b.value = window.sessionStorage.getItem('b');;
c.value = window.sessionStorage.getItem('c');
e.value = window.sessionStorage.getItem('e');

