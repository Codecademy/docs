---
Title: '.set()'
Description: 'Stores or updates entries of key-value pairs in a Map object.'
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

Stores or updates entries of key-value pairs in a `Map` object.

## Syntax

The `.set()` method accepts two parameters, the `key` and the `value`, and assigns the entry to a `Map` object:

```js
const map = new Map();

map.set(key, value);
```

The `key` and `value` can either be an object or a variable of any data type.

## Example

Key-value pairs are stored in a `Map` object using the `.set()` method.

```js
const fruits = new Map();
fruits.set('Apples', 5);
fruits.set('Oranges', 8);
```

The example above uses `.set()` to store two entries in the `fruits` map: one for 5 apples and another for 8 oranges. These entries can be overwritten and have their values changed with `.set()` as well:

```js
fruits.set('Apples', 2);
console.log(fruits);
```

The output will be:

```
Map(2) { 'Apples' => 2, 'Oranges' => 8 }
```

## Chaining

Instead of executing separate calls to `.set()` for the same `Map` object, multiple `.set()`s can be "chained" together:

```codebyte/js
const fruits = new Map();

fruits.set('Apples', 5)
      .set('Oranges', 8);
```

## Example 

Example demonstrating the usage of `.set()` method

```js
const myMap = new Map();

myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

console.log(myMap.get('key2'));
```
The output will be 

Output: value2

