---
Title: '.is()'
Description: 'This method is used to verify that two values are identical.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Methods'
  - 'Functions'
  - 'Objects'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.is()`** is a static method in JavaScript used to verify that two values are identical. This method returns a boolean value. It returns `true` if both values have the same type and value, and `false` otherwise.

## Syntax

The syntax of this method can be shown as below:

```pseudo
Object.is(val1, val2)
```

It takes two parameters. `val1` and `val2` that represent the first and second values.

## Example

The `Object.is()` method has a special case for `-0`. Although `-0` is identified as a `number`, it is not the same as `+0` or `0`. While `0` and `+0` are treated as the same.

```js
let num_zero = 0,
  num_zplus = +0,
  num_zmin = -0;

console.log(Object.is(num_zmin, num_zplus));
console.log(Object.is(num_zmin, num_zero));
console.log(Object.is(num_zero, num_zplus));
```

The example above will return the following output:

```shell
false
false
true
```
