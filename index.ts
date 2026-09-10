console.log("Hello");
console.log("I am learning TypeScript");

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Alice", 30);
person1.greet();


class Student extends Person {
    studentId: number;

    constructor(name: string, age: number, studentId: number) {
        super(name, age);
        this.studentId = studentId;
    }

    study() {
        console.log(`${this.name} is studying.`);
    }
}

const student1 = new Student("Bob", 20, 12345);
student1.greet();
student1.study();