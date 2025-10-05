---
Title: '.values()'
Description: 'Returns a new iterator object that contains the values of a Map object in insertion order.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Map'
  - 'Object'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The `.values()` method of a `Map` object returns a new **Map iterator** object that contains the **values** for each element in the Map, in insertion order.

This method does not modify the original Map and can be used to iterate through the stored values, excluding the keys.

## Syntax
map: A Map instance.
Returns a new iterator object that contains the values from the Map, in the order they were inserted.
```javascript
map.values()
```

## Example

The .values() method can be used to iterate through all values stored in a Map object

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

// Output:
// 95
// 87
// 92
```

In this example, the values() method returns an iterator of the scores, and a for...of loop is used to print each value.

```codebyte/js
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

// Output:
// 12
// 7
// 5
```

