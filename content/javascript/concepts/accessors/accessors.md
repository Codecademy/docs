---
Title: 'Accessors'
Description: 'Offers access to the properties of an object through either dot notation or bracket notation.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'OOP'
  - 'Methods'
  - 'Objects'
  - 'Classes'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In JavaScript, object properties can be obtained using **accessors**. Properties are established and retrieved with methods known as "getters" and "setters".

The `get` keyword is used to define a getter method for establishing a custom behavior when accessing the values of object properties, while the `set` keyword is used to create a setter method that determines the behavior when assigning values to those properties.

## Syntax

There are two ways to access properties: dot notation and bracket notation.

```pseudo
const object = {
    get propertyName() {}
}

object.propertyName
object[propertyName]
```

## Example

The following example defines a `User` class with a constructor and a getter method. It demonstrates how to encapsulate and access the email information of a user using accessor methods.

```js
class User {
  constructor(name, email) {
    this._name = name;
    this._email = email;
  }

  get userEmail() {
    return this._email;
  }
}

const person = new User('eddy', 'eddythefreedy9876@gmail.com');
console.log(person.userEmail);
```

This example results in the following output:

```shell
eddythefreedy9876@gmail.com
```

## Codebyte Example

```codebyte/js
class Movie {
  constructor(title, director) {
    this._title = title;
    this._director = director;
  }

  get movieTitle() {
    return this._title;
  }

  get movieDirector() {
    return this._director;
  }
}

const movie = new Movie('A Boy and His Dog', 'L.Q. Jones');

// Accessing the movie title using the . accessor
console.log(movie.movieTitle);

// Accessing the movie director using the [] syntax
console.log(movie['movieDirector']);
```
