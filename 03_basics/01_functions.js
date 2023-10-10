function myfunc(){
    console.log("Q");
    console.log("a");
    console.log("m");
    console.log("a");
    console.log("r");
    console.log("t");
    console.log("a");
    console.log("j");
}


// myfunc()

// function addTwoNum(num1,num2){
//     console.log(num1+num2);
// }

//  addTwoNum();  // This function call is not passing any arguement hence the result is NAN


// addTwoNum(5,6);  // this function call gives result 11.


// addTwoNum(5,"6");  // this function call gives result 56.

// addTwoNum(5,"ab");  // this function call gives result 5ab.

// const result= addTwoNum(5,4);
// console.log( "Result is :  ", result); // Now with the return keyword we are able to send the result outsinde the function.

// function addTwoNum(num1,num2){
//    let result= num1+num2
//    return result
// }

// function addTwoNum(num1,num2){
//     let result= num1+num2
//     return result
//     console.log( "Result from console is :  ", result) // this piece of code is not executed as it is after return keyword
//  }
            //   Result is :   9

//  function addTwoNum(num1,num2){
//     let result= num1+num2
//     console.log( "Result from console :  ", result)  // this piece of code is will get executed as it is before return keyword
//     return result
    
//     }
 
//  Result from console :   9
//  Result is :   9


function addTwoNum(num1,num2){
    return num1+num2    
    }

    // const result1 = addTwoNum(6,2)
    // console.log("Result :", result1);


// function loginUserMessage(userName){
//     return ( `${userName}  just logged in`)

// }

loginUserMessage("Somesh") // this line of code calls the function but message is not displayed
console.log(loginUserMessage("Somesh")); // this line of code calls the function and message is displayed using console.log()

function loginUserMessage(userName){
    return ( `${userName}  just logged in`)

}





