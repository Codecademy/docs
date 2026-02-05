---
Title: 'Methods'
Description: 'Methods are object properties that contain functions.'
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

In JavaScript, methods are object properties containing a function definition. Within the function definition, `this` can be used to refer to the containing object as long as the function is defined within the object.

**Note:** If a function is assigned to a property later, any reference to `this` will reflect the context of the new function. Also, if the object's function is assigned to a variable and executed via the variable, `this` will reflect the variable's execution context.

## Syntax

A method of an object is called via the following syntax:

```js
objectName.methodName();
```

If a method is called without parenthesis, it is being called as a property, which means it will return the function definition, not execute the method.

## Example

The following code snippet demonstrates how object methods work and how the context of `this` can affect the behavior of those methods when called in different ways:

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

// Referenced as a property
var method = car.printOut;

car.year = 2020;

method();
// 'this' is being referenced outside an object context
// can be fixed by explicitly setting the object context with 'bind()'

method = car.printOut.bind(car);

method();
```

The above example returns the following output:

```shell
2019 Honda Civic
undefined undefined undefined
2020 Honda Civic
```

## Codebyte Example

The following code snippet illustrates how the context of `this` affects the behavior of methods within an object, and how it can be controlled using `bind()`:

```codebyte/javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

console.log(person.fullName());

const getFullName = person.fullName;

console.log(getFullName());

const getBoundFullName = person.fullName.bind(person);

console.log(getBoundFullName());
```

## Common Built-in Array Methods

While custom methods can be defined in objects, JavaScript also provides built-in methods for the `Array` object to handle common data manipulation tasks.

### `.shift()`

Removes the first item from an array and returns it. This method **modifies** the original array.

```javascript
const colors = ['red', 'blue', 'green'];
const removedColor = colors.shift();

console.log(colors); // Output: ['blue', 'green']
```

---

### `.unshift()`

Adds one or more items to the beginning of an array. This method **modifies** the original array.

```javascript
const numbers = [2, 3, 4];
numbers.unshift(1);

console.log(numbers); // Output: [1, 2, 3, 4]
```

---

### `.concat()`

Combines two or more arrays and returns a **new** array. The original arrays remain unchanged.

```javascript
const morning = ['eggs', 'toast'];
const lunch = ['salad', 'soup'];
const meals = morning.concat(lunch);

console.log(meals); // Output: ['eggs', 'toast', 'salad', 'soup']
```

---

### `.slice()`

Selects a portion of an array and returns a **new** array. It does **not** modify the original array.

```javascript
const fruits = ['apple', 'orange', 'banana', 'pear'];
const favorites = fruits.slice(1, 3);

console.log(favorites); // Output: ['orange', 'banana']
```

---

### `.splice()`

Adds or removes elements at a specific index. This method **modifies** the original array.

```javascript
const items = ['pen', 'paper', 'ruler'];
// At index 1, remove 0 items, and add 'eraser'
items.splice(1, 0, 'eraser');

console.log(items); // Output: ['pen', 'eraser', 'paper', 'ruler']
```

---

### `.join()`

Combines all array elements into a single string, separated by the specified delimiter.

```javascript
const alphabet = ['a', 'b', 'c'];
const result = alphabet.join('-');

console.log(result); // Output: "a-b-c"
```





