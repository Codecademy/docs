---
Title: '.includes()'
Description: 'Returns true if a given value is included in a string.'
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

The `.includes()` method returns `true` if a given value is included in a string. Otherwise, it returns `false`.

## Syntax

```pseudo
string.includes(value, index=0);
```

The following parameters are used:

- A case-sensitive `value` that is checked for inclusion in the `array`.
- An optional `index`, defaulted to 0, that tells `.includes()` where to begin the check.

Here are some edge-cases to consider when using `.includes()`:

- It will not work if the provided `index` is greater than the length of the string. Instead, `false` will be returned.
- If the `index` is less than or equal to 0, the entire string will be searched.

## Example

The `.includes()` method can be used in a few ways. First, it can be applied directly to a string:

```js
console.log('Hello World!'.includes('World'));
// Output: true
```

It can also be used with a string value assigned to a variable:

```js
const helloWorld = 'Hello World!';

console.log(helloWorld.includes('world'));
// Output: false
```

The output above is `false` because `.includes()` is case-sensitive. The string literal `world` was checked for with a lowercase "w" rather than a capital "W" like in the `helloWorld` string.

## Codebyte Example

In the example below, the `.includes()` method is applied three times to the `myString` variable, using a combination of optional parameters:

```codebyte/javascript
const myString = "Let's learn JavaScript!";

console.log(myString.includes("JavaScript"));
console.log(myString.includes("JavaScript", 100));
console.log(myString.includes("JavaScript", -1));
```
