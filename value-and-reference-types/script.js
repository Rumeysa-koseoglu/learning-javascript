//?Value Types

//----1- Primitive data types
/**
 * string
 * number
 * boolean
 * undefined
 * null
 * symbol
 */


//* they do not affect each other when assigning
//*values to primitive types.(changes to one , do not affect the other) reference types are not like this
let a = 7;
let b = a;

console.log("a : " + a);
console.log("b : " + b);

console.log("----------------------");

b = 10; //*the value of "b" changed but it did not affect "a"
console.log("a : " + a);
console.log("b : " + b);