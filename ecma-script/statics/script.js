//? Static

class Mathemetics {

    add(a, b) {
        console.log(a + b)
    }

    subtract(a, b) {
        console.log(a - b)
    }

    multiply(a, b) {
        console.log(a * b)
    }

    static divide(a, b) {
        console.log(a / b)
    }
}

const math = new Mathemetics();
math.add(4, 8); //*if function not defined statically, it is accessed via the object (e.g 'add' , 'subtract')
//*if it is defined statically, we can access via the class name :
Mathemetics.divide(123, 5);
 //? because if a ptoperty is static, it is CLASS spesific, if not, it is OBJECT spesific
