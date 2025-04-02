//Callback : we convert an async structure to a sync one by passing i function as a parameter to another function

function getName(callback) {
    setTimeout(() => {
        let name = "Zeynep"
        //we shoult add here callback
        callback(name);
    }, 1000);
}

function getSurname(name,callback) {
    setTimeout(() => {
        let surname = "Bayram";
        callback(surname);
    }, 500);
}

// getName();
// getSurname(); //* since setTimeOut is async, when you call it in this direction, first the surname and then the name comes
//* to fix that we will use CALLBACK

getName((name) => {
    getSurname(name, (surname) => {
        console.log(name,surname)
    })
});
