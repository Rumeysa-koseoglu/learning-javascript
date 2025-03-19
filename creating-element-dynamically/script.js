//?Creating element dynamically
//*--to create a new element we use the 'createElement' property

const container = document.querySelector(".container");//we assigned the container to a variable

console.log(container);

const link = document.createElement("a");//we created an "a" element by using 'createElement'

link.id = "goBlogWebSite";//with this way we can assign an ID 
link.className = "btn";//we add "btn" as a class name by using 'className'
//using cssText we can give the css styles we weote in quotation marks to our element
link.style.cssText = "background-color: black; margin-top: 20px; padding: 0.5em 0.5em; color: white; border-radius: 5px;"
link.href = "http://wikipedia.com";//a href address was given 
link.target = "_blank";//it will open in a new tab
link.innerHTML = "go to wikipedia" //we wrote text inside the button using 'innerHTML'

container.appendChild(link); //we append this button (link) inside the container div by using 'appendChild'

console.log(link);