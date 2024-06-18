---
Title: '.create()'
Description: 'Creates a new object with the specified prototype object and properties.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Algorithms'
  - 'Inheritance'
  - 'Methods'
  - 'Objects'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In JavaScript, the **`.create()`** [method](https://www.codecademy.com/resources/docs/javascript/methods) creates a new object with the specified prototype object and optional additional properties. It essentially allows developers to create an object that inherits properties from another object.

## Syntax

```pseudo
Object.create(prototype[, propertiesObject])
```

- `prototype`: The object that serves as the blueprint for the newly created object.
- `propertiesObject` (Optional): The object whose properties are added to the newly created object.

## Example

The following example explains the use of the `.create()` method:

```js
// Creating an object to serve as the prototype
var prototypeObject = {
  greet: function () {
    return 'Hello!';
  },
};

// Creating a new object with 'prototypeObject' as its prototype
var newObj = Object.create(prototypeObject);

// 'newObj' inherits the 'greet' function from 'prototypeObject'
console.log(newObj.greet());
```

The above code produces the following output:

```shell
Hello!
```

In the above example, an object named `prototypeObject` is created with a `greet()` method. Subsequently, `.create()` generates a new object `newObj`, inheriting the `greet()` method from `prototypeObject`. The invocation `newObj.greet()` then outputs `Hello!` to the console.
