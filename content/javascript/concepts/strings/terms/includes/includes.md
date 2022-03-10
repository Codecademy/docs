---
Title: '.includes()'
Description: 'Returns true if a given value is included in a string'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
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

## Example

The `.includes()` method can be used in a few ways. First, it can be used directly with a string:

```js
'Hello World!'.includes('World');
// Output: true
```

It can also be used with a variable assigned to a string value:

```js
const helloWorld = 'Hello World!';

helloWorld.includes('world');
// Output: false
```

The reason the output above was `false` is because `.includes()` is case-sensitive and it checked for a string literal of `world`, which is not in the `helloWorld` string. Instead, it includes string literal that reads as "World" with a capital "W".

## Codebyte Example

Some edge-cases to keep in mind about `.includes()`:

- It will not work if the provided `index` is greater than the length of the string. Instead, `false` will be returned.
- If the `index` is less than or equal to 0, the entire string will be searched.

```codebyte/javascript
const myString = "Let's learn JavaScript!";

console.log(myString.includes("Javascript");
console.log(myString.includes("Javascript", 100));
console.log(myString.includes("Javascript", -1));
```
