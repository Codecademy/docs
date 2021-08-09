---
Title: ".toUpperCase()"
Description: "Convert a string to uppercase letters."
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Strings"
  - "Methods"
CatalogContent:
  - "introduction-to-javascript"
  - "paths/web-development"
---

## Definition 

Convert a string to uppercase letters.

## Syntax

```js
string.toUpperCase();
```

## Example 1

Converting lowercase letters to uppercase:

```js
console.log("hello world".toLowerCase());
// Output: HELLO WORLD
```

## Example 2

Don't forget that `.toUpperCase()` doesn't actually change the original string.

```codebyte/js
var state = "ny"

state.toUpperCase()
console.log(state)

console.log(state.toUpperCase());
```


