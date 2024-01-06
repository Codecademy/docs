---
Title: '.toUpperCase()'
Description: 'Convert a string to uppercase letters.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

Convert a string to uppercase letters.

## Syntax

```js
string.toUpperCase();
```

## Example 1

Converting lowercase letters to uppercase:

```js
console.log('hello world'.toUpperCase());
// Output: HELLO WORLD
```

## Example 2

Don't forget that `.toUpperCase()` doesn't change the original string:

```codebyte/js
var state = "ny"

state.toUpperCase()
console.log(state)

console.log(state.toUpperCase());
```

## Example 3

Combining `.toUpperCase()` with other string methods:

```js
let greeting = "Hi, how are you today?"
let shoutGreeting = greeting.toUpperCase().concat("!!")

console.log(shoutGreeting);
```
