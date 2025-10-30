---
Title: '.clear()'
Description: 'Removes all key-value pairs from a Map object.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'JavaScript'
  - 'Map'
  - 'Methods'
  - 'Objects'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`Map.clear()`** method in JavaScript removes all entries (key-value pairs) from a `Map` object. After invoking it, the map becomes empty and its [`.size`](https://www.codecademy.com/resources/docs/javascript/map/size) property becomes 0.

## Syntax

```pseudo
map.clear()
```

**Parameters:**

- It does not take any parameters.

**Return value:**

- The method returns `undefined` after clearing the map.

## Example

In this example, a map is created with two entries, then cleared, and the size and values are checked:

```js
const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
console.log(myMap.size);

myMap.clear();

console.log(myMap.size);
console.log(myMap.get('a'));
```

The output of this code will be:

```shell
2
0
undefined
```

## Codebyte Example

In this example, a fruit inventory map is initialized with values, then cleared to show the map becomes empty:

```codebyte/javascript
const fruitInventory = new Map([
  ['apples', 50],
  ['bananas', 30],
  ['oranges', 25]
]);

console.log('Initial inventory size:', fruitInventory.size);
console.log('Apples in stock:', fruitInventory.get('apples'));

// Clear all inventory
fruitInventory.clear();

console.log('Inventory after clearing:', fruitInventory.size);
console.log('Apples in stock after clear:', fruitInventory.get('apples'));
```
