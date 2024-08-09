---
Title: 'Constructors'
Description: 'A constructor is a function that initializes an object when the object is created.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Constructors'
  - 'Objects'
  - 'OOP'
  - 'Functions'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

A **constructor** is a function that executes the initialization of an object when the object is created.
Arguments are passed to the constructor function when you use the `new` keyword. There are two types of constructors,
one defined as a `function`, and one defined with the `constructor` method in a `class`.

## The Object Constructor Function

To use a constructor function to create objects, simply define a JavaScript function with any number of arguments.
Inside the function, the keyword `this` is used as a placeholder for the object being created.
If the constructor function is used by itself, without the `new` statement, `this` will have no value.

It's preferred to capitalize a constructor function.

### Example

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var car1 = new Car('Chevy', 'Blazer', 2015);
var car2 = new Car('Ford', 'Taurus', 2018);

console.log('Car 1 is a ' + car1.year + ' ' + car1.make + ' ' + car1.model);
// Output: Car 1 is a 2015 Chevy Blazer

console.log('Car 2 is a ' + car2.year + ' ' + car2.make + ' ' + car2.model);
// Output: Car 2 is a 2018 Ford Taurus
```

## The Class `constructor` Method

When defining a `class` in JavaScript, there is a special `constructor` method defined within it.
Like the object constructor function, the `constructor` method can be defined with any number of arguments,
and the `this` keyword can be used as a placeholder for the object being created.

### Example

```js
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

var car1 = new Car('Chevy', 'Blazer', 2015);
var car2 = new Car('Ford', 'Taurus', 2018);

console.log('Car 1 is a ' + car1.year + ' ' + car1.make + ' ' + car1.model);
// Output: Car 1 is a 2015 Chevy Blazer

console.log('Car 2 is a ' + car2.year + ' ' + car2.make + ' ' + car2.model);
// Output: Car 2 is a 2018 Ford Taurus
```
