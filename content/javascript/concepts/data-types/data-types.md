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

Data types are how data in programming is classified. In JavaScript, there are eight fundamental data types:

| Data Type   | Description                                                                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `Number`    | Any number, including numbers with decimals: `1`, `-2`, `99`, `3.14`.                                                                         |
| `BigInt`    | Any number, greater than 2^53-1 or less than -(2^53-1) with `n` appended to the number: `1234567890123456n`.                                  |
| `String`    | Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes `''` or double quotes `""`. |
| `Boolean`   | This data type only has two possible values — either `true` or `false`.                                                                       |
| `Null`      | This data type represents the intentional absence of a value, and is represented by the keyword `null`.                                       |
| `Undefined` | This data type is denoted by the keyword `undefined`. It also represents the absence of a value though it has a different use than `null`.    |
| `Symbol`    | A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.         |
| `Object`    | Collections of related data.                                                                                                                  |

The first 7 of those types are considered primitive data types. They are the most basic data types in the language. Objects are a little more complex.

At first, eight types may not seem like that many, but they are the foundation that helps programmers to build a whole new world.

### Examples

- Number and BigInt

```js
var num = 7;
var bigNum = 9999999999999999n;
```

BigInt is necessary for big numbers because they are unreliable with Number type:

```codebyte/js
console.log(9999999999999999);
console.log(9999999999999999n);

- String

```js
// String in JavaScript can be defined with both '' or ""
var greeting = 'Hi buddy';
var message = 'You are doing great! Keep studying!';
```

- Boolean

```js
// Boolean is for truth values
var isTheEarthFlat = false;
```

- Null and Undefined

```js
// Null and Undefined are both for the absence of a value, but they have different meanings
// Undefined means there should be some values, but it is undefined now
var finishCourseTime = undefined;
// Null means there is no value here
var finishStudyingDate = null;
```

- Object

```js
// object can have fields with different values and types inside
const user = {
  name: 'John',
  age: 20,
  isActive: true,
};
```
