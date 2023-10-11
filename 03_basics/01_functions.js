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

// loginUserMessage("Somesh") // this line of code calls the function but message is not displayed
// console.log(loginUserMessage("Somesh")); // this line of code calls the function and message is displayed using console.log()

// function loginUserMessage(userName){
//     return ( `${userName}  just logged in`)

// }

function loginUserMessage(userName){
    if(userName===undefined){
        console.log("Please enter the username");
       console.log(userName);
    }
    return ( `${userName}  just logged in`)

}



function loginUserMessage(userName="sam"){   // here a default value of parameter is given
    if( !userName){
        console.log("Please enter the username");
       console.log(userName);
    }
    return ( `${userName}  just logged in`)

}

// loginUserMessage("somesh");
    loginUserMessage(); // this line of code executes the function block code and also returns the value but not displayed 
  //console.log(loginUserMessage()); //this line of code executes the function block code and also returns the value and displayed. 
// sam  just logged in  --> this is the output  using console.log()

console.log(loginUserMessage("Hitesh"));
  //Hitesh  just logged in  ---> this is the output when arguement is passed


//   function calculateCartPrice(price1){
//     return price1;
//   }            

    // console.log(calculateCartPrice(200,400,300,600)); // this line of code stores the first parameter value in price1


    // function calculateCartPrice(...price1){
    //     return price1;
    //   }

      // [ 200, 400, 300, 600 ] this is the output when we give REST parameter (...) these three dots are called REST operator here

      function calculateCartPrice(val1, val2, ...price1){
        return price1;
      }

      console.log(calculateCartPrice(200,400,300,600,2000,5000,1000));

      // output:  [ 300, 600, 2000, 5000, 1000 ] here 200 in val1, 400 in val2, and the rest of all parameters in REST parameter price1

      const user={
        username:"Sohail",
        prices:499
      }

      function handleObject(anyObject){
          console.log(`Username is ${anyObject.username} and price is ${anyObject.price}` )
      }

    //   handleObject(user);  //  output is :Username is Sohail and price is 499
      // output:  Username is Sohail and price is undefined --> this o/p comes when the price in object it is prices 
      // and we are extracting price value then it will show undefined
      
      handleObject({
        username:"Sameer",
        price:599
      });    // this line of code shows passing direct object values as a function parameters
        //  output : Username is Sameer and price is 599

        const myArray = [200,300,500,700]

        function returnSecondValue(getArray){
            return getArray[1];
        }

        console.log(returnSecondValue(myArray))



    