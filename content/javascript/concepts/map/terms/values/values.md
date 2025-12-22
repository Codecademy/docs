---
Title: '.values()'
Description: 'Returns a new iterator object that contains the values of a Map object in insertion order.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Map'
  - 'Object'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.values()`** method of a `Map` object returns a new `Map` iterator object that contains the values for each element, in insertion order.

This method does not modify the original Map and can be used to iterate through the stored values, excluding the keys.

## Syntax

```pseudo
map.values()
```

**Parameters:**

This method doesn't take any parameters.

**Return value:**

Returns a new iterator object that contains the values from the Map, in the order they were inserted.

## Example

In this example, the `.values()` method retrieves all values stored in a `Map` object:

```js
const studentScores = new Map([
  ['Alice', 95],
  ['Bob', 87],
  ['Charlie', 92],
]);

const valuesIterator = studentScores.values();

for (const score of valuesIterator) {
  console.log(score);
}
```

The output of this code is:

```shell
95
87
92
```

## Codebyte Example

In this example, `.values()` returns an iterator of stock quantities, which are printed using a `for...of` loop:

```codebyte/javascript
const bookInventory = new Map([
  ['The Hobbit', 12],
  ['1984', 7],
  ['Dune', 5],
]);

const stockLevels = bookInventory.values();

console.log('Available stock quantities: ');
for (const stock of stockLevels) {
  console.log(stock);
}
```
