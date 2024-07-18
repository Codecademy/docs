---
Title: 'Methods'
Description: 'In JavaScript methods are object properties containing a function definition. Within the function definition, this can be used to refer to the containing object as long as the function is defined within the object. Note: If a function is assigned to a property later, any reference to this will reflect the context of the new function. Also, if the objects function is assigned to a variable and executed via the variable, this will reflect the variables execution context. A method of an object is called via the following syntax: js objectName.methodName();  If a method is called without parenthesis, it is being called as a property, which means it will return the function definition, not execute the method.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Objects'
  - 'OOP'
  - 'Functions'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

In JavaScript methods are object properties containing a function definition. Within the function definition, `this` can be used to refer to the containing object as long as the function is defined within the object.

**Note:** If a function is assigned to a property later, any reference to `this` will reflect the context of the new function. Also, if the object's function is assigned to a variable and executed via the variable, `this` will reflect the variable's execution context.

## Syntax

A method of an object is called via the following syntax:

```js
objectName.methodName();
```

If a method is called without parenthesis, it is being called as a property, which means it will return the function definition, not execute the method.

## Example

```javascript
const car = {
  make: 'Honda',
  model: 'Civic',
  year: 2019,
  printOut: function () {
    console.log(this.year + ' ' + this.make + ' ' + this.model);
  },
};

car.printOut();
// Output: 2019 Honda Civic

// Referenced as a property
var method = car.printOut;

car.year = 2020;

method();
// Output: undefined undefined undefined;
// 'this' is being referenced outside an object context
// can be fixed by explicitly setting the object context with 'bind()'

method = car.printOut.bind(car);

method();
// Output: 2020 Honda Civic
```
With ES6, JavaScript introduced classes, which provide a cleaner syntax for creating objects and methods.
Here's an example using class syntax:
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Method to get full name
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Method to get the age
  getAge() {
    return this.age;
  }

  // Method to set a new age
  setAge(newAge) {
    this.age = newAge;
  }
}

// Creating an instance of the Person class
const person = new Person("John", "Doe", 25);

console.log(person.getFullName()); // Output: John Doe
console.log(person.getAge()); // Output: 25

person.setAge(30);
console.log(person.getAge()); // Output: 30

In this example, we define a Person class with a constructor and three methods: getFullName, getAge, and setAge.
Constructor:
constructor(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
The constructor initializes the properties firstName, lastName, and age.
Method to Get Full Name:
getFullName() {
  return `${this.firstName} ${this.lastName}`;
}
This method returns the full name by concatenating firstName and lastName.

Method to Get the Age:
getAge() { 
return this.age;
 }
This method returns the age of the person.
Method to Set a New Age:
setAge(newAge) { 
this.age = newAge;
 }
This method sets a new age for the person.
Creating an Instance:
We create an instance of the Person class and demonstrate the use of its methods:
const person = new Person("John", "Doe", 25);

console.log(person.getFullName()); // Output: John Doe
console.log(person.getAge()); // Output: 25

person.setAge(30);
console.log(person.getAge()); // Output: 30




