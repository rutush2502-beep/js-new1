function sayMyName(){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1+num2);
// }

function addTwoNumbers(num1, num2){
    
    // let reslut = num1 + num2
    // return reslut 
    return num1 + num2
}

const reslut = addTwoNumbers(3, 5)
0
// console.log("Result", reslut);


function loginUserMessgae(username = "com"){
    if (!username) {
        console.log("Please enter the username");
        return
    } else {
         return `${username} just logged in`
    }
}

console.log(loginUserMessgae("AYush"))