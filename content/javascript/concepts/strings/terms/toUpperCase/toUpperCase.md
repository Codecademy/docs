---
Title: '.toUpperCase()'
Description: 'Converts the lowercase letters of a string to uppercase.'
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

In JavaScript, the **`.toUpperCase()`** [method](https://www.codecademy.com/resources/docs/javascript/methods) converts the lowercase letters of a string to uppercase.

## Syntax

```pseudo
string.toUpperCase();
```

- `string`: The string to be used for conversion.

## Example 1

Here is an example that demonstrates the usage of the `.toUpperCase()` method:

```js
console.log('hello world'.toUpperCase());
```

The output of the above code is as follows:

```shell
HELLO WORLD
```

## Example 2

The `.toUpperCase()` method doesn't modify the original string, as shown below:

```js
var state = 'ny';

state.toUpperCase();

console.log(state);
console.log(state.toUpperCase());
```

The above code produces the following output:

```shell
ny
NY
```

## Codebyte Example

Here is a codebyte example that shows the use of the `.toUpperCase()` method:

```codebyte/javascript
var lower = "and this way, i became uppercase";

var upper = lower.toUpperCase();

console.log(upper);
```
