
// //  # 1
// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;

// while(counter < friends.length){
//     if(typeof friends[counter] == "string" && friends[counter][index] != 'A'){
//         console.log(friends[counter]);
//     }
//     counter++;
// }
// // Output
// "1 => Sayed"
// "2 => Mahmoud"

// 2 Loop Challenge

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];
let tmCounter = 1;

if(myAdmins.indexOf("Stop") !== -1){
    myAdmins.length = myAdmins.indexOf("Stop");
    document.write(`We have ${myAdmins.length} admins`);
}

for(i=0; i<myAdmins.length;i++){    
    if(myAdmins[i] == "Stop"){
        break;
    }
    document.write(`
    <p>The Admin for team ${i+1} is ${myAdmins[i]}</p>
    <b>Team Meambers: </b>
    `);
    for (j=0;j<myEmployees.length;j++){
        while (myEmployees[j][0] == myAdmins[i][0]){
            document.write(`<p> -- ${tmCounter} ${myEmployees[j]}</p>`);
            tmCounter++;
            break;
        }
    }
    tmCounter = 1;
    document.write(`<hr>`)
}