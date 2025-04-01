//?Spread Operator ( ... )
//the JS spread operator alows us to quickly copy all or part of an array or object into another array or object

let numbers = [10, 20, 30, 40];
function add(a, b, c, d){
    console.log(a+b+c+d)
}

//*old way
//add(numbers[0],numbers[1],numbers[2],numbers[3])

//*new way
// add(...numbers);

//example :
const langs = ["Java", "C#"];
const langs2 =["Php", "Phyton", ...langs]; //we usedd the spread operator to briefly add the first array

console.log(langs2);

//example 2 :
const number = [1, 2, 3, 4, 5, 6, 7];

const [one, two, ...rest] = number;

console.log(one, two, ...rest)

//example 3 :
const array1 = ["Enes", "Ali", " Veli", "Mehmet"];

const array2 = [...array1]; //I added array1 into the array2 by using spread operator

console.log(array2);