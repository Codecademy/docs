---
Title: 'this'
Description: 'In JavaScript, the this keyword can have several meanings depending on the execution context. Most often it is used within a method of an object to return the instance of the object whose function is being executed, but what this returns can vary depending on the context.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Objects'
  - 'OOP'
  - 'Functions'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

In JavaScript, the **`this`** keyword can have several meanings depending on the execution context. Most often it is used within a method of an object to return the instance of the object whose function is being executed, but what `this` returns can vary depending on the context.

## `this` Called Within a Global Context

Used within a global context, `this` will return the global object. Either the `window` object in a web browser, or the `global` object on Node.js.

Assigning a property to `this` will assign it to the global object.

```js
// Outputs assume this is run in global context in a browser

console.log(this === window);
// Output: true

this.prop = 'value';

console.log(window.prop);
// Output: value
```

## `this` Called Within a Function

In JavaScript, there are several different ways to invoke a function:

- Function invocation
- Method invocation
- Constructor invocation
- Indirect invocation
- Arrow functions

Each has its own context, causing `this` to behave differently.

### Basic Function Invocation

`this` behaves differently in strict vs. non-strict mode. In non-strict mode, `this` returns the global object.

#### Examples

```js
// Non-strict mode in browser
function example() {
  console.log(this === window);
}

example();
// Output: true
```

In strict mode, `this` is `undefined`.

```js
// Strict mode in browser
function example() {
  console.log(this === undefined);
}

example();
// Output: true
```

### Method Invocation

Within the method of an object,`this` returns the object that is currently calling the function. This is the same as its behavior in other languages.

#### Examples

```js
const obj = {
  someValue: 100,
  someFunc: function () {
    return this.someValue;
  },
};

console.log(obj.someFunc());
// Output: 100

obj.someValue = 23;

console.log(obj.someFunc());
// Output: 23
```

However, if the function is executed outside the object, it will behave as function invocation above.

In the example below, `this` references the global object, without a `someValue` property.

```js
const obj = {
  someValue: 100,
  someFunc: function () {
    return this.someValue;
  },
};

let getValue = obj.someFunc;

console.log(getValue());
// Output: undefined
```

There is a `.bind()` method that can be used to alter this behavior. `.bind()` can be used when creating a function to specify the object that `this` will refer to.

```js
const obj = {
  someValue: 100,
  someFunc: function () {
    return this.someValue;
  },
};

let getValue = obj.someFunc.bind(obj);
// Tells getValue that its 'this' will refer to obj

console.log(getValue());
// Output: 100
```

### Constructor Invocation

When the `new` keyword is used to create an instance of a function object, the function is used as a constructor.

In this case, `this` will refer to the new object being created.

#### Example

```js
function Obj(value) {
  this.someValue = value;
}

let obj = new Obj(100);

console.log(obj.someValue);
// Output: 100
```

### Indirect Invocation

There are two methods of the `Function` type named `.call()` and `.apply()` which, like the `.bind()` method allows the `this` object to be set to a given object within a particular function. Unlike `.bind()` which returns a function, `.call()` and `.apply()` execute the function.

#### Example

```js
function showProp(prefix) {
  console.log(prefix + this.someProperty);
}

let obj1 = {
  someProperty:23
};

let obj2 = {
  someProperty:37
};

showProp.call(obj1,"The property is");
// Output: The property is 23

showProp.call(obj2,"The property is");
// Output: The property is 37

// The .apply() method takes an array as its second argument

showProp.apply(obj1,["The property is"]);
// Output: The property is 23

showProp.apply(obj2,["The property is"]);
// Output: The property is 37
```

### Arrow Functions

The [arrow function](https://www.codecademy.com/resources/docs/javascript/arrow-functions) doesn't have its own context for `this`.

The `this` value within an arrow function is inherited from the containing function.

#### Examples

```js
// Using the global context
let someFunction = () => this;

console.log(someFunction() === window);
// Output: true
```

```js
// Using the constructor context
function Obj() {
  let someFunction = () => this;
  someFunction().someProperty = 25;
}

let obj = new Obj();

console.log(obj.someProperty);
// Output = 25;
```
