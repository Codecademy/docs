---
Title: '.toUpperCase()'
Description: 'Converts a string to uppercase letters.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In JavaScript, the **`.toUpperCase()`** method converts a string to uppercase letters.

## Syntax

```js
string.toUpperCase();
```

- `string`: The original string to be converted into uppercase format.

## Example 1

Converting lowercase letters to uppercase:

```js
console.log("hello world".toUpperCase());
```

The output of the above code is as follows:

```shell
HELLO WORLD
```

## Example 2

It is important to note that `.toUpperCase()` doesn't modify the original string. Here is an example of the same:

```js
var state = "ny"

state.toUpperCase()
console.log(state)

console.log(state.toUpperCase());
```

The output of the above code is as follows:

```shell
ny
NY
```

## Codebyte example

```codebyte/javascript
var lower = "and this way, i became uppercase"

var upper = lower.toUpperCase()

console.log(upper)
```
