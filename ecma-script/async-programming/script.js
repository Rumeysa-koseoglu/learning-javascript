//?Async Programming
/*
JavaScript is a synchronous programming language. since the compiler reads the codes from top to bottom, it works synchronously, that is, sequentially
Here are the places where js async works :

1-timing (setTimeout ect)
2-events
3-http requests

 */

//*example of timing

console.log("rumeysa");

setTimeout(() => {
    console.log("it ran after 1000 ms") 
}, 1000); //according to the compiler's reading order this should be written to console first but this is async and will run after 1000ms

setTimeout(() => {
    console.log("it ran after 500ms")
}, 500);

console.log("koseoglu");
//although the compiler read from top to bottom, it did not work in order because 'setTimeout's are async