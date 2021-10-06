---
Title: 'Strings'
Description: 'Strings are a primitive data type. They are any grouping of characters (letters, spaces, numbers, or symbols) surrounded by single quotes  or double quotes ". js let single = Wheres my bandit hat?; let double = Wheres my bandit hat?;  The .length property of a string returns the number of characters that make up the string. js'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Data Types'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

Strings are a primitive data type. They are any grouping of characters (letters, spaces, numbers, or symbols) surrounded by single quotes `'` or double quotes `"`.

```js
let question = 'Wheres my bandit hat?';
```

## Length Property

The `.length` property of a string returns the number of characters that make up the string.

```js
let message = 'good nite';
console.log(message.length);
// Output: 9

console.log('howdy'.length);
// Output: 5
```

## String Concatenation

In JavaScript, multiple strings can be concatenated together using the `+` operator.

In the example, multiple strings and variables containing string values have been concatenated. After execution of the code block, the displayText variable will contain the concatenated string.

```js
let service = 'credit card';
let month = 'May 30th';
let displayText = 'Your ' + service + ' bill is due on ' + month + '.';

console.log(displayText);
// Output: Your credit card bill is due on May 30th.
```

## String Interpolation

String interpolation is the process of evaluating string literals containing one or more placeholders (expressions, variables, etc).

It can be performed using template literals: `text ${expression} text`.

```js
let age = 7;

// String concatenation
'Tommy is ' + age + ' years old.';

// String interpolation
`Tommy is ${age} years old.`;
```
