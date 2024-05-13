---
Title: '.create()'
Description: 'Creates a new object with the specified prototype object and properties.'
Subjects:
    - 'Code Foundations'
    - 'Computer Science'
    - 'Web Development'
Tags:
    - 'Algorithms'
    - 'Inheritance'
    - 'Methods'
    - Objects'
CatalogContent:
    - 'introduction-to-javascript'
    - 'paths/front-end-engineer-career-path'
--

In JavaScript, the **`.create()`** method creates a new object with the specified prototype object and optional additional properties. It essentially allows you to create an object that inherits properties from another object.

## Syntax

 ```pseudo
Object.create(prototype[, propertiesObject])
```

- `proto`: The object that will serve as the blueprint for the newly-created object.
- `propertiesObject`: An object whose properties will be added to the newly-created object. This parameter is optional.

## Example

The following example explains the use of the `.create()` method:

```js
// Creating an object to serve as the prototype
var prototypeObject = {
  greet: function() {
    return 'Hello!';
  }
};

// Creating a new object with prototypeObject as its prototype
var newObj = Object.create(prototypeObject);

// newObj inherits the greet function from prototypeObject
console.log(newObj.greet()); // Output: "Hello!"
```

The code above produces the following output:

```shell
Hello!
```

In the provided example, an object named `prototypeObject` is created with a `greet()` method. Subsequently, `.create()` generates a new object `newObj`, inheriting the `greet()` method from `prototypeObject`. The invocation `newObj.greet()` then outputs "Hello!" to the console.
