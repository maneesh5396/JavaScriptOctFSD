//---------------------------------Execution Context(just like stack frame in java)--------------------
/*
There are two types of execution contexts(scope): global and function.
--->The global execution context is created when a JavaScript script first starts to run, and it represents the global scope in JavaScript.
--->A function execution context is created whenever a function is called, representing the function's local scope.
*/
    
    //----------------scope------------------

// var a = 12;
// console.log(a);

// if(true){
//     var a = 13;
//     console.log(a);
// }
// console.log(a);

console.log("==========================");

// var b = 23;
// console.log(b);

// function abc(){
//     var b = 34;
//     console.log(b);
// }
// abc();          // whenever the calling a function a new functional execution context(stack frame) will create
// console.log(b);

// let result = abc();
// console.log(result);

// console.log(b);

//-----------------quest example-------------
// console.log(a);
// var a = 12;

// abc()
// function abc(){
//     console.log("Hello");
//     console.log(a);
//     var a = 19;
//     console.log(a);
// }
// console.log(a);


//-----------------------------------13/04/23--------------------

    //-----------------Lexical Environment-----------------
// the GEC and FEC have some connection always(parent-child)

    // var a = 12;
    // var b = 13;

    // function abc(){
    //     var a = 100;
    //     console.log(a);
    //     console.log(b);
    // }
    // abc();

    // console.log(a);
    // console.log(b);

    //----------------------Try and Catch-------------------

    console.log("Hello");

    function sum(a,b){
        // return a + b;
        // throw Error('Reference Error due to non alignment')
        try{
            throw Error('Reference Error due to non alignment');
            let c = a+b;
            return c;
        }
        catch (error){
            // console.log(error);
            console.log("something went wrong");        // our defined error in browser console
            // alert("Something went wrong!!Please try again");    //for pop-up msg
        }
    }

    let result = sum(3,4);
    console.log(result);