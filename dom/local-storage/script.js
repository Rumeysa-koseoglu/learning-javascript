//?Local Storage : it is a memory where we store datas permanently on the web

/*it is defined in the window object like session storage */

//*add value
localStorage.setItem("motion1", "push up");
localStorage.setItem("motion2", "barfix");
localStorage.setItem("motion3", "deadlift");
localStorage.setItem("motion4", "squat");

//*get value

let value = localStorage.getItem("motion3");
console.log(value); //we have written "push up" to the console

//*delete value

localStorage.removeItem("motion3");

//*clear all

// localStorage.clear();

//*if we want to create an array and see it as an array (not as a string) in the console and local storage we do:

let motions = ["push up", "barfix", "burpee", "squat", "chin up"];
// localStorage.setItem("motions",JSON.stringify(motions));


//to print array values to the console individually
let valu = JSON.parse(localStorage.getItem("motions"));

valu.forEach(function(motion){
    console.log(motion)
});