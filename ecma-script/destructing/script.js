//? Destructing

//*we use to do it like this before
/*
let langs = ["C#", "C++", "JavaScript", "Phyton"]

 let lang1, lang2, lang3, lang4

 lang1 = langs[0];
 lang2 = langs[1];
 lang3 = langs[2];
 lang4 = langs[3];

 console.log(lang1, lang2, lang3, lang4)  */

//*but now we can destructure like this
let langs = ["C#", "C++", "JavaScript", "Phyton"];

let lang1, lang2, lang3, lang4

[lang1, lang2, lang3, lang4] = langs

console.log(lang1, lang2, lang3, lang4)

//example :
const calculate = (a, b) => {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    const array = [add, subtract, multiply, divide]
    return array
}

//if I want to capture the array, I use square brackets, if I want to capture the array  I use curly brackets
[a, b, c, d] = calculate(20, 4);

console.log(a, b, c, d)

//example 2 :

const person = {
    firstName: "Rumeysa",
    lastName: "Koseoglu",
    salary: 10000,
    age: 25
}

let { firstName, lastName, salary, age } = person

console.log(firstName, lastName, salary, age);

//* in order to transfer the value while destructing, the keys must be the same (e.g firstName)