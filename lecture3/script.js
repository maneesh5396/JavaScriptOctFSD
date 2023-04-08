//-------------------------------Hoisting-------------------------
    // --> JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions,
    //  variables or classes to the top of their scope, prior to execution of the code.
    //---> variables and functions DECLARATION are hoisted.(it will treat function and variable if they are on top of the file.)
    //-->*** Let and Const are hoisted in TEMPORARAL_DEADZONE ***



//---------------------------Operators--------------
    //( <, >, <=, >=, ==, !=)
//--- comparison operators is something different in JS from Java

console.log(1 ==="1") //false
console.log(1 === 1) //true

//--------------Loops------------
   // for of--> arrays and (Iterable objects) -> array is default iterable object.
        let arr1 = [1,2,3,4,5,6,7,8];

        for(let item of arr1){
            console.log(item);
        }

    // for in--> loops over object and its properties.

        let obj = {
            name: "utkarsh",
            age: 27,
            canVote: true
        }
        for(const key in obj) {
            console.log(key)
            console.log(obj[key])
        }

//-----------Switch------------
    switch(condition){
        case 1:
            console.log("1")
            break;
        case 2:
            console.log("2")
            break;
        default:
            console.log("ans")
        
    }
    //------grouping of Switch case----
    switch(condition){
        case 1:
        case 2:
        case 3:
            console.log("podium position");
            break;
        case 4:
            console.log("10 consolited prizes");
            break;
        default:
            console.log("Participated in race");
    }


