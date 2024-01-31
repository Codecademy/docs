---
Title: 'Data Types'
Description: 'Data types are used to classify eight fundamental values used for programming in JavaScript, including primitive and object types.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Integers'
  - 'Booleans'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

**Data types** are used to classify eight fundamental values used for programming in JavaScript, including primitive and object types.

## Primitive Data Types

JavaScript uses seven primitive data types that are listed in the table below:

| Data Type   | Wrapper Object                                                                  | Description                                                                                                                                |
| ----------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `number`    | [`Number`](https://www.codecademy.com/resources/docs/javascript/number-methods) | Any number, including numbers with decimals: `1`, `-2`, `99`, `3.14`.                                                                      |
| `bigint`    | `BigInt`                                                                        | Any number, greater than 2<sup>53</sup>-1 or less than -(2<sup>53</sup>-1) with `n` appended to the number: `1234567890123456n`.           |
| `string`    | [`String`](https://www.codecademy.com/resources/docs/javascript/strings)        | Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single `''` or double `""`.            |
| `boolean`   | `Boolean`                                                                       | This data type only has two possible values — either `true` or `false`.                                                                    |
| `null`      | None                                                                            | This data type represents the intentional absence of a value, and is represented by the keyword `null`.                                    |
| `undefined` | None                                                                            | This data type is denoted by the keyword `undefined`. It also represents the absence of a value though it has a different use than `null`. |
| `symbol`    | `Symbol`                                                                        | A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.      |

## Objects

[Objects](https://www.codecademy.com/resources/docs/javascript/objects) are a little more complex since they are collections of related data.

> **Note:** The `null` type cannot be tested with `typeof` like all the other primitive types because it will return `"object"`. This must be tested with the type equality operator (i.e., `=== null`).

## Number and BigInt  

In JavaScript, numbers are always stored as double-precision floating point numbers.

```js
let num = 7;
let bigNum = 9999999999999999n;
```

`BigInt` is necessary for large whole numbers because they are unreliable with the `Number` type:

```js
console.log(9999999999999999);
console.log(9999999999999999n);
```

This will output the following:

```shell
10000000000000000
9999999999999999n
```  

The integer precision for the `Number` type is `15 digits`. The following example is runnable: 

```codebyte/javascript
let x = 999999999999999;
let y = 9999999999999999;
console.log(x);
console.log(y);
```
  
## String

Strings in JavaScript can be defined with either `' '` or `" "`.

```js
let greeting = 'Hi buddy';
let message = 'You are doing great! Keep studying!';
```

To find the length of the string, the built-in `length` property is used.

```codebyte/javascript
let text = "abracadabra";
console.log(text.length);
```

## Boolean

Boolean is for truthy or falsy values:

```js
let lateToWork = true;
let isTheEarthFlat = false;
```

To convert a non-boolean value into a boolean, the `Boolean` function or double not `!!` is used.

```codebyte/javascript
let value = Boolean('Harry'); 
console.log(value); // returns true
```

## Null and Undefined

Null and Undefined are both for the absence of a value, but they have different meanings.

```js
// Undefined means there should be some values, but it is undefined now
let finishCourseTime = undefined;

// Null means there is no value here
let finishStudyingDate = null;
```

A function also outputs `undefined` when no value is returned. 

```codebyte/javascript
function help() {
  // no return statement
}
console.log(help()); 
```

The same function outputs `null` when null is returned. 

```codebyte/javascript
function help() {
  return null;
}
console.log(help()); 
```

## Object

Objects can have fields with different values and types inside:

```js
const user = {
  name: 'Jane',
  age: 20,
  isActive: true,
};
```

Alternately, an empty `object` can be initialised and then the properties added to the object.

```codebyte/javascript
const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(person);
```
