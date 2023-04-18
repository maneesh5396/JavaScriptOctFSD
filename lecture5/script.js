//------------------------Debugging------------------------------

// var a = 12;
// console.log(a);

// function sum(a,b){
//     var c = a+b;
//     return c;
// }

// const result = sum(1,2);
// console.log(result);

 
// console.log(a);
// var a = 13;
// console.log(a);

// console.log(b);
// let b = undefined;

                        //===========CALLBACKS===============

//------------------------FIRST-CLASS FUNCTIONS--------------------------
    /* the languages which supoorts FIRST-CLASS FUNCTIONS can treat their functions just like VARIABLES.  */
    
    // 1. we ca declare variables.
    // 2. we can pass variables in function as their arguments.
    // 3. we can return the variables from the function.

let num1 = 12;
let num2 = 13;

// function sum(a, b){
//     return a + b;
// }
// let result = sum(num1, num2);

// function calc(fn, val){
//     console.log(fn);
//     console.log(val);
// }
// calc(sum, 1);

// function sum(a,b){
//     return a + b;
// }



//--------------------------------16/04/23------------------------
// Logging sum function

// function logging(){
//     console.log('logging');
// }

// function add(a,b){
//     console.log(a+b);
//     return a+b;
// }
// logging();
// add(1,2);

//1. Function declaration
//2. Function expression

//1. named functions....
    function abc(){

    }

//2. anonymous function....
    const sum3 = function(){

    }

//3. arrow functions....
    const sumArrow = (a,b) =>{
        return a + b;
    }
    let resultArrow = sumArrow(2,5);
    console.log(resultArrow);


//---------------------------------CallBacks----------------------

function logging(callBackFunction){
    //please do your work
    console.log('logging');
    callBackFunction();

}
function add(a,b){
    console.log(a+b);
    return undefined;
}

logging(add);
//  add  vs add()

//----------------------Higher Order Functions---------------
        // the functions which can return a function are Higher Order Function
        // the function which can accept a function as an argument