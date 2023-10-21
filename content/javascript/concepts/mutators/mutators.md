---
Title: 'Mutators'
Description: 'Mutators change the value of private variables.'
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

A **mutator** method (also known as a _setter_) can be used to prevent direct modification of a _member variable_ by creating a _private variable_ . This method determines the behavior when assigning a value to those variables.

In Javascript, private member variables are prefixed using the `#` symbol, while mutators are created with the `set` keyword.

```js
class Animal {
  #name;

  set name(name) {
    this.#name = name;
  }
}

const someAnimal = new Animal();
```

The value of the private variable can now be updated by assigning a new value.

> **Note:** The value of the private variable can not be retrieved without an [accessor](https://www.codecademy.com/resources/docs/javascript/accessors) (also known as a _getter_).

```js
class Animal {
  #name;

  set name(name) {
    this.#name = name;
  }
}

const someAnimal = new Animal();
someAnimal.name = 'Buddy';

console.log(someAnimal.name);
```

The example above results in the following output:

```shell
undefined
```

Attempts to access a private variable using the `#` prefix will result in a syntax error.

```js
class Animal {
  #name;

  set name(name) {
    this.#name = name;
  }
}

const someAnimal = new Animal();
someAnimal.name = 'Buddy';

console.log(someAnimal.#name);
```

The example above results in the following output:

```shell
SyntaxError: Private field '#name' must be declared in an enclosing class
```

## Codebyte Example

This example shows how to update and retrieve the value of a private variable.

```codebyte/js
class Room {
  #color;

  set color(color) {
    this.#color = color;
  }

  get color() {
    return this.#color;
  }
}

const bedroom = new Room();
bedroom.color = 'pink';
console.log(bedroom.color);
```
