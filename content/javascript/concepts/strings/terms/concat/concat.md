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

```pseudo
string.concat(string_1, string_2, string_3);
```

## Example 1

Concatenating a string:

```js
console.log('Would you like a latte or '.concat('cappuccino?'));
// Output: Would you like a latte or cappuccino?
```

## Example 2

Concatenating strings with the usage of variables:

```js
const x = 'Would you like a latte or';
const y = 'cappuccino?';

console.log('Hey Bob! '.concat(x, ' ', y));
// Output: Hey Bob! Would you like a latte or cappuccino?
```

## Codebyte Example

The following is runnable, and demonstrates the use of the `.concat()` method:

```codebyte/javascript
// Concatenating a string directly:
console.log('I love JavaScript'.concat(' and Go'));

// Concatenating strings using variables
const myString = 'I love JavaScript '
const myString2 = 'and Go';
console.log(myString.concat(myString2));
```
