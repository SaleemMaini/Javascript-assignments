// #1
// let num = prompt("Print Number From – To", "Example: 5-20");

// let nums = num.split("-");

// let smallNumber = nums[0];
// let largeNumber = nums[1];

// if (nums[1] < nums[0]) {
//   smallNumber = nums[1];
//   largeNumber = nums[0];
// }

// for (i = smallNumber; i <= largeNumber; i++) {
//   console.log(i);
// }

// #2

// let popup = () => {
//   let pop = document.createElement("div");
//   let closeBtn = document.createElement("div");

//   pop.innerHTML = `
//     <h2>Welcom</h2>
//     <p>welcom to elzero web school</p>
//     `;
//   pop.style.cssText = `
//         margin : 50px auto;
//         width : 500px;
//         background-color: #ccc;
//         padding:25px;
//         text-align: center;
//         position : absolute;
//         `;

//   closeBtn.innerText = `X`;
//   closeBtn.style.cssText = `
//     border-radius: 50%;
//     background-color: red;
//     position: absolute;
//     top: -18px;
//     right: -14px;
//     padding: 10px;
//     color: white;
//     cursor: pointer;
//     `;
//     closeBtn.addEventListener("click", () => {
//         pop.remove();
//     })
//   pop.appendChild(closeBtn);
//   document.body.appendChild(pop);
// };
// setTimeout(popup , 5000);

// #3

let counterNumber = document.createElement("div");
counterNumber.innerText = "5";

document.body.appendChild(counterNumber);



let countDown = () => {
    counterNumber.innerText -= 1;
    if(counterNumber.innerText === "0"){
        clearInterval(counter);
        window.open("https://Elzero.org" ,"_blank" , "width=400,height=400")
    }
} 

let counter = setInterval(countDown, 1000);