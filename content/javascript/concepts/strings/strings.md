---
Title: 'Strings'
Description: 'Strings are any grouping of characters (letters, spaces, numbers, or symbols) surrounded by quotes or backticks.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Characters'
  - 'Methods'
  - 'Data Types'
  - 'General'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

**Strings** are a primitive data type. They are any grouping of characters (letters, spaces, numbers, or symbols) surrounded by single quotes `'`, double quotes `"` or backticks `` ` ``.

## Concatenation

In JavaScript, multiple strings can be concatenated or joined together using the `+` [operator](https://www.codecademy.com/resources/docs/javascript/operators).

In the example below, multiple strings and variables containing string values have been concatenated. After the code block is run, the `displayText` variable will contain the concatenated string:

```js
let service = 'credit card';
let month = 'May 30th';
let displayText = 'Your ' + service + ' bill is due on ' + month + '.';

console.log(displayText);
```

## Interpolation

String interpolation is the process of evaluating string literals containing one or more placeholders (expressions, variables, etc). It can be performed using template literals (`text ${expression} text`), as in the following example:

```js
let age = 7;

// String concatenation
console.log('Tommy is ' + age + ' years old.');
// Output:
// Tommy is 7 years old.


// String interpolation
console.log(`Tommy is ${age} years old.`);
// Output:
// Tommy is 7 years old.
```

## Escaping Characters

On occasion it may be necessary to include characters in a string that may have reserved meanings or to apply additional formatting. Characters, such as quotes, can be included by prepending a `\`. There are a number of predefined escape sequences such as `\n` or `\t` to add formatting such as a line break or tab respectively.

```js
// Line break
console.log('Hello\nWorld');
// Output:
// Hello
// World

// Including quotes
console.log("\"Wayne's World\"");
// Output: "Wayne's World"
```
