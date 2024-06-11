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
console.log(hello.toUpperCase());
```

## Example 2

Don't forget that `.toUpperCase()` doesn't actually change the original string.

```codebyte/js
var state = "ny"

state.toUpperCase()
console.log(state)

console.log(state.toUpperCase());
```

## Codebyte example
```codebyte/js
var lower = "and this way, i became uppercase"

var upper = lower.toUpperCase()

print(upper)
```
