---
Title: "Map.clear()"
Description: "Removes all key-value pairs from a Map object."
Tags: ["JavaScript", "Map", "clear"]
---

## Overview

The `Map.clear()` method removes all key-value pairs from a `Map` object.  
After calling `clear()`, the map will be empty.

## Syntax

```javascript
map.clear()
```
## Example

To demonstrate `Map.clear()`, first create a `Map` object with some key-value pairs:
```javascript
const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
console.log(myMap.size);
```
The output will be
```pseudo
2
```
## Codebyte Example

In the example below, a `fruitInventory` map tracks the quantity of different fruits in stock. By the end of the program:
- The inventory is checked before clearing with the [`.size` property](https://www.codecademy.com/resources/docs/javascript/map/size).
- All entries are removed using the `.clear()` method.
- The inventory is verified to be empty after clearing.
```codebyte/js
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

