//? Async- Await

// async function hello() { ---//*when we mark a function with async , it returns a promise
//     return "Hello World"
// }

// console.log(hello())
// hello()
// .then((res) => console.log(res))

document.querySelector("#button").addEventListener("click", async () => {
    //when we put 'await' at the beginning of the code , it does not move on the next code before the execution of that code is finished
    const responsePost = await fetch('https://jsonplaceholder.typicode.com/posts/1')//if we put await somewhere, we must put async at the beginning of that function
    const post = await responsePost.json();

    const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);

    const comments = await responseComments.json();

    // console.log(responsePost);
    console.log(comments);
})