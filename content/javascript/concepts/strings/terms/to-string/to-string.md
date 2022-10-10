
Title: '.toString()'
Description: 'Returns a string representing the object.'
Subject: 
 - 'Computer Science'
Tags:
 -  'Functions'
 -  'Strings'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.toString()`** method converts the given object and returns its corresponding string representation.

## Syntax

```pseudo
stringObject.toString()
```

The `.toString()` method does not take any parameters.

> **Note:** This method can be called on numbers, arrays, and objects.

## Example

The following example demonstrates the `.toString()` method:

```js
// Assigning constant to integer value
const myNum = 3

// Using .toString() method to get its string value
const str = myNum.toString()

console.log("Value of str variable is", str)

// Using typeof operator to show string value was returned
console.log("Type of str variable is", typeof str)
```

This will produce the following output:

```shell
Value of str variable is 3
Type of str variable is string
```