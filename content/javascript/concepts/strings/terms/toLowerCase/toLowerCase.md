---
Title: '.toLowerCase()'
Description: 'Convert a string to lowercase letters.'
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

The `.toLowerCase()` method converts a string to lowercase letters in JavaScript.

## Syntax

```js
string.toLowerCase();
```

## Example 1

Converting uppercase letters to lowercase letters:

```js
console.log('HELLO WORLD'.toLowerCase());
// Output: hello world
```

## Example 2

Don't forget that `.toLowerCase()` doesn't actually change the original string.

```codebyte/js
var message = "sPoNgEbOb mEmE!"

message.toLowerCase()
console.log(message)

console.log(message.toLowerCase());
```

## Codebyte Example

The `.toLowerCase()` method will convert upper case alphabet characters to lower case in a string with other character types such as digits and special characters.

```codebyte/js
const string = 'What a COMPLEX string !1@2#3'

const newString = string.toLowerCase()
console.log(newString)
```

