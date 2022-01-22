// let newClasses = document.querySelector(".classes-to-add");
// let deleteClasses = document.querySelector(".classes-to-remove");
// let element = document.querySelector("[title = Current]");
// let elementClassList = document.querySelector(".classes-list div");


// newClasses.onblur = function() {
//     if(newClasses.value == "") {
//         newClasses.focus();
//     }
//     else {
//     let words = newClasses.value.split(" ");
    
//     for(i=0; i<words.length; i++){
//         element.classList.add(words[i]);
//     }
    
//     newClasses.value = "";
    
//     if(element.classList.length == 0){
//         elementClassList.textContent = "No classes"
//     }
//     else {
//         elementClassList.textContent = element.classList;
//     }
// }
// }

// deleteClasses.onblur = function() {
//     if(deleteClasses.value == "") {
//         deleteClasses.focus();
//     }
//     else {
//     let words = deleteClasses.value.split(" ");

//     for (i=0; i<words.length; i++) {
//         element.classList.remove(words[i])
//     }

//     deleteClasses.value = "";
    
//     elementClassList.textContent = element.classList;
// }
// }

// let element = document.querySelector(".our-element")
// let paragraphs = document.querySelectorAll("p");

// for(i=0; i<paragraphs.length;i++){
// paragraphs[i].remove();
// }

// let beforeDiv = document.createElement("div");
// beforeDiv.classList.add("start");
// beforeDiv.setAttribute("title", "Start Element");
// beforeDiv.setAttribute("data-value", "Start");
// beforeDiv.textContent = "Start";
// element.before(beforeDiv);

// let afterDiv = document.createElement("div");
// afterDiv.classList.add("end");
// afterDiv.setAttribute("title","End Element");
// afterDiv.setAttribute("data-value", "End");
// afterDiv.textContent = "End";
// element.after(afterDiv);

// let mydiv = document.querySelector("div");
// console.log(mydiv.childNodes[4])

document.addEventListener("click",function(e){
    let type = e.target;
    console.log(`this is ${type.nodeName}`)
})