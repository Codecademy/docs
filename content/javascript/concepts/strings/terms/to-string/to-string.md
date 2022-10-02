Title: 'toString()'
Description: 'Returns a string representing the object'
Subject: 'Computer Science'
Tags:
 -  'Functions'
 -  'String'

CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'

The **`.toString()`** convert the given object and returns its corresponding string representation.

 ## Syntax

 ```js
 .toString()
 ```

The toString() function in JavaScript does not take any parameter.
toString in javascript can be used with numbers, strings, arrays, and objects.

## Example

The following example demonstrates the `.toString()` method:

```js
//Declaring variable with integer value
const myNum = 3

//using toSting() method to get its string value
const str = myNum.toString()

console.log("Value of str variable is", str)

//using typeof function to show string value was returned
console.log("Type of str variable is", typeof str)
```

This will produce the following output:

```shell
Value of str variable is 3
Type of str variable is string
```