//?EVENTS
/* Events happen when something changes on a web page. They occur when a
user clicks a button, moves the mouse over something, or presses a key */

function changeTitle() {
    document.querySelector('.title').textContent = "TİTLE CHANGED AGAİN"
    //* we can also use console.log to verify or check
    console.log("title changed again");
} //* we changed the title again by calling the function we defined here on the HTML page (when the button is clicked)


//-------------------------------------------------------------

//we can also call the function when we use addEventListener
const fifthBtn = document.querySelector(".click-me-5");

//the first part in the prenthesis should be the event, the second part should be the name of the function
fifthBtn.addEventListener("click", changeBtnText);

function changeBtnText() {
    document.querySelector('.click-me-5').textContent = "button text changed";
}

//*we can create a function inside the addEventListener without calling a function

fifthBtn.addEventListener("click", function () {
    console.log("BUTTON CLİCKED");
});

//---
function changeBtnText(e) {
    console.log(e); //logs event details to the console
    console.log(e.type); //logs event type to the console
    console.log(e.target); //logs target element to the console
    console.log(e.target.className); //logs className of the target element to the console
}
//this function runs when an event occurs. "e" represents the event object, which contains details about the event
//for example, if this function is used with a button click event, it will log information about the click (such
//as the clicked element and event type).

//*if you use console.log(e.target.textContent), it takes the text content of the HTML element where this event runs
//---

//? Mouse Events
/*
 *DOMContentLoaded
 *load
 *click
 *dblclick
 *mouseover
 *mouseout
 *mouseenter
 *mouseleave
 */

//--DOMContentLoaded

document.addEventListener("DOMContentLoaded", run);
//using addEventListener we called a function that will run when the page loads

function run() {
    console.log("page loaded");
}

//--load

window.addEventListener("load", pl);

function pl() {
    alert("page loaded!");
}

//--click

const title = document.querySelector(".title");

title.addEventListener("click", func); //we added eventlistener to title

//this function will run when the title is clicked
function func(a) {
    console.log(a.type);
}

//--dblclick 

const p = document.querySelector("p");

p.addEventListener("dblclick", dbl);

//this function will run when the title is double clicked
function dbl(event) {
    console.log(event.type);
}

//--mouseover
//* we use it when we want to run a function when the mouse is hovering over something

const container = document.querySelector(".container")

container.addEventListener("mouseover", mo);

//this function will run when the mouse is hovered over the container
function mo(b) {
    container.style.backgroundColor = "aliceblue"
}

//--mouseout

container.addEventListener("mouseout", mout);

function mout() {
    container.style.backgroundColor = "lightgreen"
}

//--mouseleave
//*it works when you move the mouse over the element

container.addEventListener("mouseleave", mol);

function mol() {
    p.style.color = "red";
}


//?Keyboard Events
/**
 * keypress
 * keydown
 * keyup
 */


//* keypress : it works when any key is pressed on the keyboard
//*(only trigered on letters and numbers)

document.addEventListener("keypress", kp);

function kp(c) {
    console.log(c.key); //captures which keys you press
    // console.log(c.keyCode) / returns the ascii table equivalents of the keys (you can also use wich for the same thing)
}


//*keydown : the difference from "keypress" is that it is triggered by all keys on the keyboard(not only numbers and letters)


//*keyup : it works when you lift your hand off the button (unlike others)

document.addEventListener("keyup", ku);

function ku(d) {
    console.log(d.keyCode);
}


//example : when getting keycodes, we do this to prevent the page from refreshing when F5 is pressed
//and to capture its keycode

/*

document.addEventListener("keydown", kpr);

 function kpr(f) {
     console.log(f.keyCode);
     if (e.keyCode == 116){
     console.log("page refresh blocked");
 }
     f.preventDefault();
 }

     */


//? İnput Events

/**
 * focus
 * blur
 * copy
 * paste
 * cut
 * select
 */



//*focus : runs when input is focused

const input = document.querySelector(".input");

input.addEventListener("focus", inp);

function inp(g) {
    console.log(g.type); // you can write any code you want to run when the input is focused
}



//*blur : triggered when clicking outside the input after focusing

input.addEventListener("blur", inp);



//*copy : it runs when we copy the text inside the input

input.addEventListener("copy", inp);


//*paste : it runs when we paste a text inside the input


//*cut : runs when we cut the text from input


//*select : runs when the text inside the input is selected

input.addEventListener("select", log);

function log() {
    console.log(input.value); //it saves what we select from the input
}