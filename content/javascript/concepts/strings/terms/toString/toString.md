---
Title: '.toString()'
Description: 'Returns a string representing the object.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/computer-science'
---

The **`.toString()`** method returns a string representation of a given value or object.

## Syntax

```pseudo
stringObject.toString()
```

The `.toString()` method takes no parameters.

> **Note:** This method can be called on numbers, arrays, and objects.

## Example

The following example demonstrates the `.toString()` method:

```js
// Assigning constant to integer value
const myNum = 3;

// Using .toString() method to get its string value
const str = myNum.toString();

console.log('Value of str variable is', str);

// Using typeof operator to show string value was returned
console.log('Type of str variable is', typeof str);
```

This will produce the following output:

```shell
Value of str variable is 3
Type of str variable is string
```

## Codebyte Example

The following is a runnable example demonstrating the `.toString()` method:

```codebyte/javascript
let arr = ["Hi", "All", "this", "is", "an", "Array"]
console.log(arr.toString())
```
