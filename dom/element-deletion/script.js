//?Element deletion

const todoList = document.querySelector(".list-group"); //list-group is assigned to a variable
const todos = document.querySelectorAll(".list-group-item"); //all li elements is assigned to a variable
const ul = document.querySelector("ul");

todos[0].remove(); //we deleted first li element (index 0) from list-group
//  by using 'remove()'.. if we want to delete the other childs we can just select the true index number

//* if you want to remove last child (last li element), do this
todos[todos.length-1].remove(); 
//or you can do this
todoList.removeChild(todos[todos.length-1]);
//or
ul.removeChild(ul.lastElementChild);

