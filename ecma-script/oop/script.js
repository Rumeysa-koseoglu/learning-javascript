//? OOP (Object Oriented Programming) : OOP is integrating real life into software

let a;

class person {
    /*
    1-features/properties
    2-constructive method
    3-function
    */

    constructor(nameValue, lastNameValue, ageValue, salaryValue) { //we assigned values to our 'person' class using the constructor
        this.name = nameValue;
        this.lastName = lastNameValue;
        this.age = ageValue;
        this.salary = salaryValue; //we added constructor's parameters to the variables we defined with 'this'
    }


    //we define the function here
    showInfos(){
        console.log(`
            Name : ${this.name} 
            Last Name : ${this.lastName} 
            Age :${this.age} 
            Salary : ${this.salary}`) //we printed walues we defined above with console.log
    }
}


//create object
//*we define a variable to access the class we defined (person1)
const person1 = new person("Rumeysa", "Koseoglu", 25, 10000);//values in this bracket will match the parameters in the constructor brackets above

//*we can add one or more person by using new and show them with showInfos function
const person2 = new person("Ikranur", "Atdemir", 23, 9000);

//we should call the function for display infos on console
person1.showInfos();
person2.showInfos();

//*i can also acces the properties and functions in the class I defined using console.log, piece by piece