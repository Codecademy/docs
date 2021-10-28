---
Title: 'Map'
Description: '`Map` is an object in Javascript that stores key-value pairs and their original insertion order.'
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

`Map` is an object in Javascript that stores key-value pairs and their original insertion order. 

We can define a new map as follows. This map will store the number of fruits a store has. 

```js
const fruits = new Map();
```

# Storing data in Map

Key-value pairs are stored in `Map` using the `Map.prototype.set(key, value)` function. 

```js
fruits.set('Apples', 5)
fruits.set('Oranges', 8)
```
This stores in `fruits` that there are 5 apples and 8 oranges.

# Retrieving data from Map

Values are retrieved by their keys from `Map` objects using the `Map.prototype.get(key)` function.

```js
console.log(fruits.get('Apples')) // expected output: 5
console.log(fruits.get('Oranges')) // expected output: 8
```

This retrieves the information that there are 5 apples and 8 oranges in the store.

# Determining if keys are in Map

We can check whether a key is in a `Map` object using the `Map.prototype.has(key)` function.

```js
console.log(fruits.has('Apples')) // expected output: true
console.log(fruits.has('Bananas')) // expected outpute: false
```

The first statement checks that there are apples in `fruits`, while the second statement finds that there are no bananas in `fruits` and returns false. 

# Retrieving the size of a map

We can check the number of keys in a `Map` object using the `Map.prototype.size` property.

```js
console.log(fruits.size) // expected output: 2
```

There are 2 keys in `fruits`: `Apples` and `Oranges`.

# Removing data from Map

We can remove data from `Map` using the `Map.prototype.delete(key)` function.

```js
console.log(fruits.delete('Oranges')) // expected output: true
console.log(fruits.delete('Strawberries')) // expected output: false
```

The first statement returns true because `fruits` contains `Oranges` as a key and has removed it.
The second statement returns false because `Strawberries` is not a key in fruits.
