// --------------Datatypes------------
// ---> Strings = "maneesh";
// ---> Boolean = "true";
// ---> Numbers = 1324;
// ---> Null = it is set by only developer
// ---> Undefined =

// let user

//---------------------Objects---------------

//----in Java we can't create Property Name with SPACE But in JS
let car = {
    seats: 5,
    Ac: true,
    wheels: "yes",
    sports: false,
    powerwheels: true,
    "engine version": 8, //(key parameter in string form) ->it should not be done but we can do this way too
    engineVersion: 8, //this is good way
    "year": 2020
}
// console.log(car);

//-----get-----
// console.log(car.Ac, car.seats, car.powerwheels); //first way
// console.log(car["seats"], "seats are there"); //second way
// console.log(car.seats, car.year, car["engine version"]);


//-----edit-----
// car.seats = 3;
// console.log(car.wheels, car.seats);

//-----delete-------
// delete car.powerwheels
// console.log(car);

//----------------------Arrays--------------------

let arr = [1,5, "abcd", 7, true, 'c',9,5];
// console.log(arr);

//-----get-----
// console.log(arr[0], arr[4], arr[5]);

//-----edit-----
// arr[0] = "start";
// console.log(arr);

//----length of array---
// console.log(arr.length);

        // ----------Properties of Array--------//

        // 1.---Push---(add at last)
    // arr.push(78);
    // console.log(arr);

    // 2.---Pop---(removes the last element)
    // arr.pop();
    // console.log(arr);

    // 3.---Shift---(removes the first element)
    // arr.shift();
    // console.log(arr);

    // 4.---Unshift---()

    // 5.----slice---(it gives the shallow copy of an array)
    // let sliceArr = arr.slice(2,5);
    // console.log(sliceArr);

    // 6.---splice---()
    // let spliceArr = arr.splice(2,5);
    // console.log(spliceArr);

    // 7.---sort---
    let sortArr = arr.sort();
    console.log(sortArr);


    //----------- Extra Array callbacks-------
    // forEach, reduce, filter, map, find