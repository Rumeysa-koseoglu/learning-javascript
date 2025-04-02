//? Inheritance


class Person {
    firstName = "Mehmet";

    write() {
        console.log("Person write : ", this.firstName);
    }
}

class Student extends Person { //we inherited the firstName from the person class using 'extend'

    write() {
        console.log("Student write : ", this.firstName);
        super.write();
    }
}

const student1 = new Student();
student1.write();

//--------------------
//*super and this example 1 :

class Employee {
    firstName = "Enes";

    write() {
        console.log(this.firstName);
    }
}


class Waiter extends Employee {
    write() {
        super.write();
    }
}

const waiter1 = new Waiter();
waiter1.write();

const employee1 = new Employee();
employee1.write();


//example 2 :


class Human {
    constructor(nameValue, lastNameValue, salaryValue) { //the constructor function runs and takes the values of name, surname, and salary 
        this.name = nameValue;
        this.lastName = lastNameValue;
        this.salary = salaryValue;

    }
    writeInfo() { //the writeInfo() method prints the information to console (namevalue lasnamevalue ect)
        console.log(this.name, this.lastName, this.salary)
    }
}

class Female extends Human { //the Female class inherits from the human class (using extends)
    constructor(nameValue, lastNameValue, salary) { //inside the constructor, the 'super()' function calls the constructor of the Human class and sets the name, lastName, and salary
        super(nameValue, lastNameValue, salary);
    }

    write() {
        super.writeInfo(); //calls the writeinfo() function in the Human class
    }
}


const doctor = new Female("Zeynep", "Taskin", 15000); //an object (doctor) of the Doctor class is created with this information
doctor.writeInfo(); //when called, the writeInfo() method is executed and "Zeynep Taskin 15000" is written to the screen