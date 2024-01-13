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

## Number  

In JavaScript, numbers are always stored as double-precision floating point numbers. In this format, each number uses 64 bits to represent 3 parts, 
- 52 bits for the number (bits 0 to 51)
- 11 bits for the exponent (bits 52 to 62)
- 1 bit for the sign (bit 63)

```js
let x = 7;
let y = 123e5;
```
The integer precision for the `Number` type is `15 digits`.
```js
let x = 999999999999999;
let y = 9999999999999999;
console.log(x);
console.log(y);
```
The above lines give the following output,
```shell
999999999999999
10000000000000000
```

The `Number()` method converts a string or other value to the number type. If the value can't be converted, it returns `NaN`.
```js
Number('123'); // 123
Number(true); // 1
Number(false); // 0
Number(null); // 0
Number(underfined); // NaN
Number("Harry"); // NaN 
```

## BigInt  

Any integer greater than 2<sup>53</sup>-1 and less than -(2<sup>53</sup>-1) cannot be represented by the `Number` type. Instead, they are represented by another datatype `BigInt`.      

To create a `BigInt`, append `n` at the end of the integer or by use the `BigInt()` function.  

```js
let bigNum = 9999999999999999n;
let b = BigInt(1234567890123456789012345);
```  
The Javascript `typeof` for `BigInt` is "bigint".  
```js
let x = BigInt(1234567890123456789012345);
console.log(typeof(x));
```
The above code snippet gives the following output:
```shell
bigint
```

## String

Strings in JavaScript can be defined with either `' '` or `" "`.

```js
let greeting = 'Hi buddy';
let message = 'You are doing great! Keep studying!';
```

## Boolean

Boolean is for truthy or falsy values:

```js
let lateToWork = true;
let isTheEarthFlat = false;
```

## Null and Undefined

Null and Undefined are both for the absence of a value, but they have different meanings.

```js
// Undefined means there should be some values, but it is undefined now
let finishCourseTime = undefined;

// Null means there is no value here
let finishStudyingDate = null;
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
