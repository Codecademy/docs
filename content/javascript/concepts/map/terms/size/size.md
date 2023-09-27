---
Title: '.size'
Description: 'Returns the number of entries inside of a Map object.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Map'
  - 'Object'
  - 'Properties'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.size`** property returns the number of entries inside of a `Map` object.

## Syntax

```pseudo
map.size;
```

Since `.size` is a property of `Map`, no parentheses are needed.

## Example

Assuming there is a map of `fruits`, the number of keys can be checked with the `.size` property:

```js
const fruits = new Map([
  ['Apples', 5],
  ['Oranges', 8],
]);

console.log(fruits.size); // Output: 2
```

## Codebyte Example

The following example uses the `size` property to confirm the number of elements in a map after deleting a key-value pair.

```codebyte/js
const personAge = new Map([
  ['John', 19],
  ['Mary', 54],
  ['Mark', 70],
  ['Gary', 44]
]);

console.log(personAge.size);

personAge.delete('Mary');

console.log(personAge.size);
```
