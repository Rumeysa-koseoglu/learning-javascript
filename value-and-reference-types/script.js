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

//?Reference Types

//----2- Reference data types
/**
 * object
 * array
 * function
 */

//*unlike primitive types, reference types affect
//* each other when assigning values
let array1 = [1,2,3];
let array2 = array1;

array2.push(12);//*we added 12 to array2 but it also added to array1
console.log(array1);
console.log(array2);//*when we print arrays to the console, "12" will be added to both
//*so the change we made in array2 will also be seen in array1