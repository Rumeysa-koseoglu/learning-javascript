//?Arrow Functions
//before es6 we was defined functions like this

/* function print(){
console.log("hello")
}

print();
*/ //*but now we can define it like this
const print = () => {
    console.log("hello")
}

print();

//we can also define a function with parameters
const greet = (name) => {
    console.log("Hello", name)
}

greet("Rumeysa");

//we can define two or more parameters in the same function
const thank = (firstName, lastName) => {
    console.log("Thank you", firstName, lastName)
}
//(if we write just one line of code in the function, we can remove the curly brackets)(and if there is only one parameter , we can also remove its brackets)

thank("Rumeysa", "Koseoglu");

//if we write only onw line of code and it is a 'return' , we can also remove it

// const cube = x => {
    // return x*x*x      
// }   ----->   //* you can remove curly brackets and 'return'

const cube = x => x*x*x
console.log("result: " , cube(3))