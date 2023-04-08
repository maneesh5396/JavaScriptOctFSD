//-----------------Functions in JS--------------

//---------Function Declaration-----------
// function sum(a,b){
//     return a + b;
// }

// let ans = sum(1,6);
// console.log(ans);

// let ans1 = sum("1","6");
// console.log(ans1);

// -------variables
    // let c = 12;
    // function sum(a,b){
    //     return a + b + c;
    // }
    // let result = sum(2,3);
    // console.log(result);


//--------Function Expressions-------------
    function sum(a,b){    // normal function sum
        return a + b;
    }

    let sumExpression = function(a,b){    // function expression sum
            return a + b;
    }
    let res1 = sum(1,5);
    let res2 = sumExpression(1,2);
    console.log(res1,res2)