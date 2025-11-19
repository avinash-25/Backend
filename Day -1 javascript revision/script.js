/**
 * 1. Fundamentals of javascript
 * 2. arrays of objects.
 * 3. functions return.
 * 4. async js coding.
 * 5. foreach map filter find indexOf
 */

//! 1. forEach
/*
let arr = [1, 2, 3, 4, 5];

const x = arr.map((val) => {
    console.log(val + " Hello");
    return 1;
})

console.log(x); //undefined
*/

//! map

/*
let arr = [1, 3, 4, 2, 5];

const x = arr.map((val) => { //? one by one each member copied to val and operation is performed in every iteration.
    return val * 4;
})

console.log(x);

*/

//? it works on array and returns new array with same size.
//? map returns the new array.
//? map will return same size array as previous.
//? It creates nw array and returns that array.


//! filter

/*
let arr = [3, 5, 6, 8, 1, -4, 56];

const filterdArray = arr.filter((val) => {
    if (val > 3)
        return true;
    else
        return false;
})

console.log(filterdArray);

*/

//? if we cant return anything then is will considered as a false
//? filter creates new array and returns that array.


//! find
/*
let arr = [3, 5, 6, 8, 6, 12];

const ans = arr.find((val) => {
    if (val == 34)
        return val;
})

console.log(ans);
*/
//? it returns first occurance of an element.

//! indexOf()

// console.log(arr.indexOf(12));
//? indexOf()  :--->  it returns index of element if found otherwise returns -1.


//! Objects

//? objects is nothing it just a key value pair.


/*
let obj = {
    name: "Avinash",
    kuchhbhi: "kuchbhii"
}

//todo :  Accessing objects value

console.log(obj["name"]); // first way
console.log(obj.name); //  second way

*/
// Object.freeze(obj); // after that we cant update the values in object.


//! find the length of the function
//? the number of parameters are called length of the function.
//? abcd is also an object in javascript.
//? so it contains object property

/*
function abcd(a, b, c, d) {
    return 12;
}

console.log(abcd.length);
let x = console.log(abcd());;
console.log(x);
*/

//! async is coding

//? if code runs line by lien then it is said to be synchronous.

//? Those code who have async nature, send those code to the sidetrack and runs those code who have sync nature, when all sync code are runs, then check async code is completed or not and if completed then send them to the main call stak and execute them.

//? in the sidestack they only to be processed but they cant be executed.


async function abcd() {
    let blob = await fetch(`https://randomuser.me/api/`);
    // this line will go the server and took back data from there.
    // this is non-blocking
    // this line go the the side stack and during that period next line will be run.
    let data = await blob.json();
    console.log(data);
    console.log(data.results[0].name);
}

abcd();

// let blob = await fetch(`https://randomuser.me/api/`);

// let res = await blob.json();

// console.log(res);