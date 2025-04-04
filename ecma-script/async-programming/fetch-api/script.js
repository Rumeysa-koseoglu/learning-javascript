//?Fetch API


//get student information from JSON file using fetch API
function getStudents(url) {
    //send request to URL
    fetch(url)
        .then((response) => {
            //convert response to json fromat
            return response.json();
        })
        //print json data to console
        .then((data) => console.log(data))
        //if there is an error print it to the console
        .catch((error) => console.log(error))
}

//get information of "student.json" file
getStudents("students.json");