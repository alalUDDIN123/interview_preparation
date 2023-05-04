

// Encapsulation 👍👍👍👍👍 The properties of the Person class (firstName and lastName)
// are encapsulated within the class, and can only be accessed or modified using the class methods

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

// Abstraction 👍👍👍👍👍: The getFullName() method of the Person class and it is also Polymorphism
// as it is defined in both Person and Student classes

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    isAdult() {
        return this.age >= 18 ? "You are adult" : "You are not adult";
    }
}


// Inheritance 👍👍👍👍👍: The Student class is inheriting properties and methods from the Person 
//class using the extends keyword. By calling the super() constructor,
// the Student class can access the properties and methods of the Person class

class Student extends Person {
    constructor(firstName, lastName, age, grade) {
        super(firstName, lastName, age);
        this.grade = grade;
    }

    getGrade() {
        return this.grade;
    }

    setGrade(grade) {
        this.grade = grade;
    }
}

const person = new Person("Alal", "Uddin", 1);
//   console.log("===================================================")
//   console.log(person.getFullName()); 
//   console.log(person.isAdult()); 

//   console.log("===================================================")

console.log("====================================", `\n`)

const newStudent = new Student("Alal", "Uddin", 2, "Grade A")
// const studentName= newStudent.getFullName()
// console.log("student fullname:",studentName);

const studentGrade = newStudent.getGrade()
console.log("student grade:", studentGrade);
console.log(`\n`, "====================================", `\n`)