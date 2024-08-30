---
Title: '.freeze()'
Description: 'This method is used to freeze an object and it returns the object that was passed to the function.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
  - 'Web Applications'
Tags:
  - 'Properties'
  - 'Objects'
  - 'Functions'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

The **`Object.freeze()`** method is used to freeze an object. Freezing an object does not allow new properties to be added to the object and prevents removing or altering the existing properties. It preserves the enumerability, configurability, writability, and prototype of the object. It returns the passed object and does not create a frozen copy.

## Syntax

```pseudo
Object.freeze(obj)
```

`obj`: It is the object which has to be frozen.

## Examples

The following codes demonstrate a basic implementation of the `Object.freeze()` method:

### Example 1

In this example, the object `obj2` has been assigned property from object `obj1`, and the properties of `obj1` are frozen therefore new properties and values are prevented from being added to `obj2`:

```js
// creating an object constructor and assigning values to it
const obj1 = { property1: 'initial_data' };

// creating a second object that will freeze the properties of the first object
const obj2 = Object.freeze(obj1);

// Updating the properties of the frozen object
obj2.property1 = 'new_data';
console.log(obj2.property1);
```

The above code snippet will return the following output:

```shell
initial_data
```

### Example 2

In this example, the object `obj` has been assigned `prop: function` which has been later deleted since the object `obj` wasn’t frozen. After that, a new object `o` has been assigned the frozen values of `obj` which prevented it from further updations:

```js
// creating an object constructor and assigning values to it
let obj = { prop: function () {}, name: 'adam' };
console.log(obj);

// Updating the properties of the object
obj.name = 'billy';
delete obj.prop;
console.log(obj);

// Freezing the object using object.freeze() method
let o = Object.freeze(obj);

// Updating the properties of the frozen object
obj.name = 'chris';
console.log(obj);
```

The above code snippet will return the following output:

```shell
{ prop: [Function: prop], name: 'adam' }
{ name: 'billy' }
{ name: 'billy' }
```
