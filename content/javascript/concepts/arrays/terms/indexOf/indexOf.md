---
Title: '.indexOf()'
Description: 'Returns the first index at which an element can be found. Returns -1 if element is not found.'
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

Returns the first index at which an element can be found. Returns `-1` if element is not found.

## Syntax

```js
array.indexOf(searchElement, startIndex);
```

- `searchElement`: The element we are looking for.
- `startIndex`: The index position to begin search from. Optional.

A negative `startIndex` will offset from the end of the array to begin search.

## Examples

In the example below, the index with a value of 12 is logged to the console:

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

Check if color `'blue'` is in the `colors` array and after the first element:

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
// Output: 0
```
