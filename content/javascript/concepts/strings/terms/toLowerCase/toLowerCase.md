---
Title: ".toLowerCase()"
Description: "Convert a string to lowercase letters."
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Strings"
  - "Methods"
CatalogContent:
  - "introduction-to-javascript"
  - "paths/front-end-engineer-career-path"
---

 

Convert a string to lowercase letters.

## Syntax

```js
string.toLowerCase();
```

## Example 1

Converting uppercase letters to lowercase letters:

```js
console.log("HELLO WORLD".toLowerCase());
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
