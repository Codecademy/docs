---
Title: 'Data Types'
Description: 'Data types are how data in programming is classified. In JavaScript, there are eight fundamental data types: Number, BigInt, String, Boolean, Null, Undefined, Symbol, and Object.'
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

**Data types** are how data in programming is classified. In JavaScript, there are eight fundamental data types: 

## Primitive Data Types 

The table below holds the seven primitive data types. They are the most basic data types in the language. Objects are a little more complex.

| Data Type | Wrapper Object   | Description                                                                                                                                   |
|-----| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `number` | [`Number`](https://www.codecademy.com/resources/docs/javascript/number-methods)    | Any number, including numbers with decimals: `1`, `-2`, `99`, `3.14`.                                                                         |
| `bigInt` | `BigInt`    | Any number, greater than 2^53-1 or less than -(2^53-1) with `n` appended to the number: `1234567890123456n`.                                  |
| `string` | [`String`](https://www.codecademy.com/resources/docs/javascript/strings)    | Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single `''` or double `""`. |
| `boolean` | `Boolean`   | This data type only has two possible values — either `true` or `false`.                                                                       |
| `null` | `Null`      | This data type represents the intentional absence of a value, and is represented by the keyword `null`.                                       |
| `undefined` | `Undefined` | This data type is denoted by the keyword `undefined`. It also represents the absence of a value though it has a different use than `null`.    |
| `symbol` | `Symbol`    | A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.         |


## Objects
Collection of related Data.    


At first, eight types may not seem like that many, but they are the foundation that helps programmers build a whole new world.

## Number and BigInt

```js
var num = 7;
var bigNum = 9999999999999999n;
```

BigInt is necessary for big numbers because they are unreliable with Number type:

```codebyte/js
console.log(9999999999999999);
console.log(9999999999999999n);
```

## String

Strings in JavaScript can be defined with either `'` `'` or `"` `"`.

```js
var greeting = 'Hi buddy';
var message = 'You are doing great! Keep studying!';
```

## Boolean

Boolean is for truthy or falsy values:

```js
var lateToWork = true;
var isTheEarthFlat = false;
```

## Null and Undefined

Null and Undefined are both for the absence of a value, but they have different meanings.

```js
// Undefined means there should be some values, but it is undefined now
var finishCourseTime = undefined;

// Null means there is no value here
var finishStudyingDate = null;
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
