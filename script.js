// let - var 
// const - constant

if(true){
    var a = 'Hello World!';
}
console.log(a);

//Scope

console.log(b);

var b = 15;

//Hoisting


// Array and Object (const)



// Spread

const arr1 = [1, 2, 4, 6];
const arr2 = [24, 1, 42, 72]

//const arr12 = Array.prototype.push.apply(arr1, arr2);
console.log([...arr1, ...arr2]);

/** */

const obj1 = {
    n1: 'Hello',
    n2: 'World'
};

const obj2 = {
    n1: 'By'
}

var obj12 = Object.assign(obj1, obj2);

let objEs6 = {
    ...obj1, 
    ...obj2
}

console.log(obj12);
console.log(objEs6)

/** */

const arrNext = [4, 12, 2];

function sum(a,b,c){
    return (a+b)/c;
}

 //console.log(sum(arrNext[0], arrNext[1], arrNext[2]));
 //console.log(sum.apply(null, arrNext));
 console.log(sum(...arrNext));



 //REST

 function output(val1, val2, ...REST){
    console.log(val1, val2,  REST);
 }

 output(15, 12, 12, 1, -1, 2.5, 24, 'sdfsfd');