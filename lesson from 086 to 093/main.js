// #1

// 1-  document.getElementById("elzero");

// 2-  document.getElementsByClassName("element")[0].innerHTML = "asdasd";

// 3-  document.getElementsByTagName("div")[0].innerText = "dsadasdsad ";

// 4-  document.getElementsByName("js")[0].innerText = "sasadsadasd";

// 5-  document.querySelector("#elzero").innerText = "aaaaaaaa";

// 6-  document.querySelector("div").innerText = "wwwwwwww";

// 7-  document.querySelector(".element").innerText = "ggggggggg";

// 8-  document.querySelector("[name=js]").innerText = "ggggggggg";

// 9-  document.querySelectorAll("#elzero")[0].innerText = "ggggggggg";

// 10- document.querySelectorAll(".element")[0].innerText = "ggggggggg"; 

// 11- document.querySelectorAll("div")[0].innerText = "ggggggggg";

// 12- document.querySelectorAll("[name=js]")[0].innerText = "ggggggggg";

// 13- document.body.children[0].innerText = "eeeeeeeeeeeee";

// 14- document.body.firstChild.innerText = "eeeeeeeeeeeee";

// 15- document.firstElementChild.innerText = "eeee111111111111e";

// // #2
// let imgs = document.images;
// for(i=0; i<imgs.length; i++){
//     imgs[i].setAttribute("src","https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
//     imgs[i].setAttribute("alt","Elzero Logo");
// }

// #3
// let usPound = 0;
// let inpFiled = document.querySelector("[name = dollar]");
// let res = document.querySelector(".result");
// inpFiled.oninput = function(){
//     usPound = inpFiled.value;
//     let convertToEgyPound = function(USD) {
//         return USD * 15.6;
//     }
//     res.innerHTML = `{${usPound}} USD Dollar = {${convertToEgyPound(usPound).toFixed(2)}} Egyptian Pound`;
// };

// #4

// Selectors
let num = document.getElementsByName("elements")[0];
let texts = document.getElementsByName("texts")[0];
let type = document.getElementsByName("type")[0];
let createBtn = document.getElementsByName('create')[0];
let rs = document.getElementsByClassName("results")[0];

let form = document.forms[0];
form.style.display= "flex";
form.style.flexDirection = "column";
form.style.gap = "15px";
form.style.width = "35%"
form.style.margin = "auto"

let inpFileds = document.querySelectorAll(".input");
inpFileds[0].style.padding = "15px";
inpFileds[1].style.padding = "15px";
inpFileds[2].style.padding = "15px";

createBtn.style.padding = "15px";
createBtn.style.backgroundColor = "teal";
createBtn.style.color = "white";
createBtn.style.outlineStyle = "none";

// Event listner
createBtn.addEventListener('click', e => {
    e.preventDefault();
    rs.innerHTML = "";
    type.options[type.selectedIndex].value == "Div" ?
    addItems(num.value,texts.value, "div") :
    addItems(num.value,texts.value, "section");
});

// Function
function addItems(num, text, type) {
    for(i=0; i<num; i++){
        let item = document.createElement(type);
        item.setAttribute('id',`id-${i}`);
        item.append(text);
        item.classList.add("box");
        item.style.backgroundColor = "teal";
        item.style.width = "35%";
        item.style.color = "white";
        item.style.margin = "10px auto";
        item.style.padding = "10px";
        rs.appendChild(item);
    }
}
