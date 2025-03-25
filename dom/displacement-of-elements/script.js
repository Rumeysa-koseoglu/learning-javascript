//?Displacement of elements

const container = document.querySelector(".container");

const newTitle = document.createElement("h2");
newTitle.className = "new-title";
newTitle.textContent = "HI WORLD";

console.log(container.childNodes[1])

//*for example I want to swap h5 and h2

container.replaceChild(newTitle,container.childNodes[1]); //before the comma is the new label, after the comma
// is the label I want to change/replace