//? AJAX (async javascript and XML)

//* Data Retrieval Functon With Ajax

//the function that prepares the URL
function prepareURL (url, id) {
    //if id is null, only the parent url is returned
    if(id === null) {
        return url;
    }
    //if id exists ,"?postId=Id" is appended to the URL
    return `${url}?postId${id}`
}

//function that makes the AJAX request to get the comments
function getComments (url, id) {
    //preparing the URL
    let newURL = prepareURL(url, id);
    //create a new XMLHttpRequest object
    const xhr =new XMLHttpRequest();
    //add listener that monitors the status of tthe ajax request
    xhr.addEventListener("readystatechange", () => {
        //if the request is completeda and successful
        if(xhr.readyState === 4 && xhr.status === 200) {
            //we print the incoming data to the console
            console.log(xhr.responseText)
        }
    })
//we start the get request
    xhr.open("GET", newURL);
    //send the request
    xhr.send();
}

//we call te getcomments function
getComments("https://jsonplaceholder.typicode.com/comments", null)//since we gave null as id , it pulls all comments



//example 2:
function getData(url) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange" , () => {
if(xhr.readyState === 4 && xhr.status === 200){
    console.log(JSON.parse(xhr.response));
}
    })

    xhr.open("GET", url);
    xhr.send();
}

getData("https://jsonplaceholder.typicode.com/posts")