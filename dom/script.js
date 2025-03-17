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