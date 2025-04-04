//?Promise : we use it to convert async structures to sync, it is an alternative form of CALLBACKS
//*a promise tells us whether an operation will be completed successflly or not

let check = true;

//*'resolve' is runs when an operation is completes succesfully
//*'reject' runs when an operation fails 
const promise1 = new Promise((resolve, reject) => {
    if (check) {
        resolve("Promise is successful"); //if check === true, 'resolve' runs and returns this message
    } else {
        reject("Promise is unsuccessful")//if check === false, 'reject' runs and returns this message
    }
})

console.log(promise1)


let check2 = false;
function createPromise() {
    return new Promise((resolve, reject) => {
        if (check2) {
            resolve("there is no problem with promise")
        } else {
            reject("there is problem with promise")
        }
    })
}

createPromise()
    //'then' captures the successful result. (it works when resolve works)
    .then((response) => {
        console.log(response);//now it is doesn't work because check = false
    })
    .catch((error) => {//it works when reject works
        console.log(error)//since reject is currently working "there is problem with promise" is written to the console 
    })
    //'finally' always works
    .finally(() => console.log("always works"))//promise works whether it succeeds or fails

// ? Promise = XMLHttpRequest

function readStudents(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            })
        } catch (error) {
            reject(error)
        }

        xhr.open("GET", url);
        xhr.send();
    })
}

readStudents("student.json")
    .then((data) => console.log(data))
    .catch((err) => console.log(err))


//*Promise all
const p1 = Promise.resolve("first promise is successful");
const p2 = Promise.resolve("second promise is successful");
const p3 = new Promise((resolve ,reject) => {
    resolve("third promise is successful")
})

Promise.all([p1, p2, p3])
.then((res) => {
    // console.log(res)
    for(let value of res) {
        console.log(value)
    }
})
.catch((error2) => console.log(err))//even if one of them is wrong (promises), 'catch' would work, not 'promise all'