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

## Codebyte Example

Here is a codebyte example that demonstrates the usage of the `constructor` function:

```codebyte/js
function Movie(title, director, yearReleased) {
  this.title = title;
  this.director = director;
  this.yearReleased = yearReleased;
}

var movie1 = new Movie('A Boy and His Dog', 'L.Q. Jones', 1975);
var movie2 = new Movie('Mad Max', 'George Miller', 1979);

console.log('Movie 1: ' + movie1.title + ', directed by ' + movie1.director + ', released in ' + movie1.yearReleased);
// Output: Movie 1: A Boy and His Dog, directed by L.Q. Jones, released in 1975

console.log('Movie 2: ' + movie2.title + ', directed by ' + movie2.director + ', released in ' + movie2.yearReleased);
// Output: Movie 2: Mad Max, directed by George Miller, released in 1979
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

## Codebyte Example

Here is a codebyte example that demonstrates the use of the `constructor` method:

```codebyte/js
class Movie {
  constructor(title, director, yearReleased) {
    this.title = title;
    this.director = director;
    this.yearReleased = yearReleased;
  }
}

var movie1 = new Movie('A Boy and His Dog', 'L.Q. Jones', 1975);
var movie2 = new Movie('Mad Max', 'George Miller', 1979);

console.log('Movie 1: "' + movie1.title + '", directed by ' + movie1.director + ', released in ' + movie1.yearReleased);
// Output: Movie 1: "A Boy and His Dog", directed by L.Q. Jones, released in 1975

console.log('Movie 2: "' + movie2.title + '", directed by ' + movie2.director + ', released in ' + movie2.yearReleased);
// Output: Movie 2: "Mad Max", directed by George Miller, released in 1979
```
