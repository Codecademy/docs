---
Title: '.delete()'
Description: 'Removes the entry associated with a given key from a Map object.'
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

Removes the entry associated with a given key from a `Map` object.

## Syntax

The `.delete()` method accepts a `key` parameter and returns `true` if the deletion was successful. Otherwise, if the `key` does not exist, `false` is returned.

```js
map.delete(key);
```

## Example

Data can be removed from a `Map` object using the `.delete()` method.

```js
const fruits = new Map([
  ['Apples', 5],
  ['Oranges', 8],
]);

console.log(fruits.delete('Oranges')); // Output: true
console.log(fruits.delete('Strawberries')); // Output: false
```

The first `.delete()` statement returns `true` because `fruits` contain an entry with `Oranges` as a key and has successfully removed it. The second statement returns `false` because an entry with the `Strawberries` key does not exist in `fruits`.

## Codebyte Example

In the code below, a new `Map` of consumable construction supplies catalogs the current quantities on hand:

```codebyte/js
const inventory = new Map([
  ['Nail', '1,000'],
  // Initial inventory: 1 Tape Roll
  ['Tape Roll', '1'],
  ['Brick', '5,000']
]);

// Initial size: 3
console.log('Inventory map size: ', inventory.size);

// Tape Roll updated to 0:
inventory.set('Tape Roll', '0');
console.log('We ran out of tape ', inventory.get('Tape Roll'));

console.log('Deleting tape from the map...');
console.log(inventory.delete('Tape Roll'));  // Output: true
console.log('Updated inventory map size: ', inventory.size);  // Updated size: 2

console.log('Deleting tape again from the map...');
console.log(inventory.delete('Tape Roll'));  // Output: false
console.log('Updated inventory map size: ', inventory.size);  // Size remains 2, deletion unsuccessful
```
