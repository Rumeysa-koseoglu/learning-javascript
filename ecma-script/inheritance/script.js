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