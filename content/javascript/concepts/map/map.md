---
Title: 'Map'
Description: 'Map is an object in JavaScript that stores key-value pairs and their original insertion order.'
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

`Map` is an object in JavaScript that stores key-value pairs in their original insertion order. 

A new map can be defined as follows. This map will store the number of fruits a store has. 

```js
const fruits = new Map();
```

## Storing data in Map

Key-value pairs are stored in `Map` using the `Map.prototype.set(key, value)` function. 

```js
fruits.set('Apples', 5);
fruits.set('Oranges', 8);
```

This stores in `fruits`, 5 apples and 8 oranges.

## Retrieving data from Map

Values are retrieved by their keys from `Map` objects using the `Map.prototype.get(key)` function.

```js
console.log(fruits.get('Apples')); // Output: 5
console.log(fruits.get('Oranges')); // Output: 8
```

This retrieves the information that there are 5 apples and 8 oranges in the store.

## Determining if keys are in Map

Checking whether a key is in a `Map` object can be done using the `Map.prototype.has(key)` function.

```js
console.log(fruits.has('Apples')); // expected output: true
console.log(fruits.has('Bananas')); // expected outpute: false
```

The first statement checks that there are apples in `fruits`, while the second statement finds that there are no bananas in `fruits` and returns false. 

## Retrieving the size of a map

The number of keys in a `Map` object can be checked using the `Map.prototype.size` property.

```js
console.log(fruits.size); // expected output: 2
```

There are 2 key-value pairs in `fruits`: `'Apples' : 5` and `'Oranges' : 8`.

## Removing data from Map

Data can be removed from `Map` using the `Map.prototype.delete(key)` function.

```js
console.log(fruits.delete('Oranges')); // Output: true
console.log(fruits.delete('Strawberries')); // Output: false
```

The first statement returns `true` because `fruits` contain `Oranges` as a key and has removed it.
The second statement returns `false` because `Strawberries` is not a key in fruits.


## Codebyte Example

```codebyte/js
const addressBook = new Map();

addressBook.set('Paul', '11254932');
addressBook.set('Jane', '12939582');
addressBook.set('Tom', '12231543');

console.log(addressBook.size);
console.log(addressBook.get('Paul'));
console.log(addressBook.has('Jane'));
console.log(addressBook.has('Peter'));
console.log(addressBook.delete('Tom'));
console.log(addressBook.delete('Peter'));
console.log(addressBook.size);
```
