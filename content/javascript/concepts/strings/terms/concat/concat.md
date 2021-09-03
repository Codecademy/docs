---
Title: '.concat()'
Description: 'Concatenates or combines strings together.'
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

Concatenates or combines strings together.

## Syntax

```js
string.concat(string_1, string_2, string_3);
```

## Example 1

Concatenating a string:

```js
console.log('Do you like Latte or '.concat('Cappuccino?'));
// Output: Do you like Latte or Cappuccino?
```

## Example 2

Concatenating strings with the usage of variables:

```js
const x = 'Do you like Latte or';
const y = 'Cappuccino?';

console.log('Hey Bob! '.concat(x, ' ', y));
// Output: Hey Bob! Do you like Latte or Cappuccino?
```
