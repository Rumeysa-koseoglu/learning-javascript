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