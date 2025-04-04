//*What Is The DOM?

//DOM (document object model) is like a map of a web page. When you open a website 
//the browser creates a structure og the page, and that structure is called the DOM

/**how does it work
 * a web page is made of HTML
 
 * the browser reads the HTML  and creates a tree like structure

 * this structure lets JavaScript change the page (add,remove or edit elements)
 */

//*example
//the html document is the tree, the elements (like <h1>,<p>,<button>) are the 
//branches and leaves, JS can change or move these branches and leaves. 

/**things JS can do with DOM;
 * change text on the page
 * add or remove elements
 * change styles (color,size, etc.)
 * react to user actions (like button clicks)
 */

let value;

//gets the full URL of the current page
value = document.location.href;
//gets the domain name of the current page (e.g., "example.com")
value = document.location.hostname;
//gets the port number used by the current page (e.g. 443 for HTTPS)
value = document.location.port;
//gets the path of the current page after the domain
value = document.location.pathname;
//gets the character encoding of the document
value = document.characterSet;
//gets the title of the current document (the one seen on the browser tab)
value = document.title;
//gets the content type of the document (e.g. "text/html")
value = document.contentType;
console.log(value); //print the last assigned value to the console

//?Selectors - style features //selecting elements using different methods
//classname, id, tag name

//--getElementById : captures an element by its ID

const button = document.getElementById("exampleId");

//logs the entire button element to the console
console.log(button);

//logs the ID of the button
console.log(button.id);
//another way to get the ID using getAttribute method
console.log(button.getAttribute("id"));

//logs the class name(s) of the button
console.log(button.className);
//another way to get the class using getAttribute method
console.log(button.getAttribute("class"));

//accessing a specific class from the class list (index 3)
const list = button.classList[3];

//looping through the class list and logging each class name
list.forEach(function (className) {
    console.log(className);
});
//logs the entire class list of the button
console.log(list)


//--getElementByClasName : captures all elements with the given clsass name


//loop throught the elements and log each one
const example = document.getElementsByClassName("example-class");
example.forEach(function (exp) {
    console.log(exp);
});

console.log(example); //logs the collection of elements


//--getElementByTagName : captures all elements with the given tag name

const forms = document.getElementsByTagName("example-tag");

//accessing the second form element (index 1)
console.log(forms[1]); //logs the second form element
console.log(forms[1].name); //logs the "name" attribute of the second form
console.log(forms[1].id); //logs the "id" attribute of the second form

//capturing all <li> elements in the document
const todoList = document.getElementsByTagName("li");
console.log(todoList);//logs the collection of <li> elements


//--querySelector - querySelectorAll 
//*it is not a spesific selector like getElementById and getElementByClasName
//* I can specify the attribute that I want to select, with using "#" or "."

//it selects the element with id: "clear" 
const clearButton = document.querySelector("#exp-clear-btn");
console.log(clearButton); //logs it the console

//selects element with class: "link"
const link = document.querySelector(".link");
console.log(link);

//if you want to select all elements that have the same class you should use querySelectorAll
const select = document.querySelectorAll(".edit-btn");
console.log(select);

//if you want to select a spesific element from the elements that have the same class, do this;
const selector = document.querySelectorAll(".edit-btn")[2];
//by doing this , you will select the element with the same class at the 2.nd indes (the third ".edit-btn")

//*also we can loop through childs of elements with the same class
const slct = document.querySelectorAll("li:nth-child(3)");
//or we can use("li:first-child")/("li:last-child")

//if you use odd or even you can access the element with odd or even number 
const oddEven = document.querySelectorAll("li:nth-child(even)");//you selected the elemetns that are even numbered

//*this method(way) is used to convert elements with the same class or id into an array
//after converting to array you can loop  and perform operations on them
