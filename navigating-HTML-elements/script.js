//?Navigating HTML elements

const exmplParent = document.querySelector(".list");//our so-called parent element
const todo = document.querySelector(".list-items");//our so-called child element
const card = document.querySelector(".card");

let value;

//accessing from parents to children
value = exmplParent; //we accessed parent element
value = exmplParent.children[0];//accessed first child
value = exmplParent.children[3];//accessed fourth child
value = exmplParent.children[todoList.children.length - 1];//we accessed last child
value = exmplParent.children[3].textContent = "changed";//we changed the text content of the third child


//* we create an array to navigate all child elements
value = Array.from(exmplParent.children);//we converted it to array

//now we can navigate through each child
value.forEach(function (todo) { 
    console.log(todo.textContent);
})

console.log(value);