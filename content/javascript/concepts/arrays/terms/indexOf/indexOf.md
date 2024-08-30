---
Title: '.indexOf()'
Description: 'Returns the first index at which an element can be found. Returns -1 if element is not found.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.indexOf()`** method returns the first index at which an element can be found. Returns `-1` if the element is not found.

## Syntax

```pseudo
array.indexOf(element, startIndex);
```

The following parameters are used in the `.indexOf()` method:

- The `element` to be searched for in the `array`.
- The optional `startIndex` position to begin searching from. If one is not given, the search starts from the beginning of the array. Negative indices will offset from the end of the `array`.

## Examples

In the example below, the index for the number `12` is logged to the console:

```js
const numbers = [6, 12, 8, 10];
const indexOf12 = numbers.indexOf(12);

console.log(indexOf12);
// Output: 1
```

If element is not found the result will be `-1`:

```js
const pizzaToppings = ['pepperoni', 'olives', 'mushrooms'];
const indexOfPineapple = pizzaToppings.indexOf('pineapple');

console.log(indexOfPineapple);
// Output: -1
```

Check if color `'blue'` is in the `colors` array starting with the second element:

```js
const colors = ['blue', 'orange', 'pink', 'yellow', 'teal'];
const checkBlue = colors.indexOf('blue', 1);

console.log(checkBlue);
// Output: -1
```

## Codebyte Example

Multiple matches will only return the first index where a match occurs:

```codebyte/javascript
const repeatGreeting = ['hello world', 'hello world'];
const firstGreeting = repeatGreeting.indexOf('hello world');

console.log(firstGreeting);
```
