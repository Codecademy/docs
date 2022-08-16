---
Title: 'Enum'
Description: 'JavaScript has no support for a native enum type, but it is possible to define enums using Objects.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Types'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

JavaScript has no support for a native enum type, but it is possible to define enums using `Object`s.

## What is an Enum?

In general, enums are a type that can hold a finite number of defined values. The values in enums are not mutable.

## Implementing an Enum in JavaScript

A simple way to implement an enum in JavaScript by creating an `Object` of key/value pairs and using the `Object.freeze()` function to make it immutable:

```js
const directions = Object.freeze({
  north: 0,
  south: 1,
  east: 2,
  west: 3 });
```

The enum can be used as follows:

```js
let d = directions.north;
```

All possible enum values can be listed as follows:

```js
Object.keys(directions).forEach((direction) =>
  console.log('direction:', direction)
);
```

This would produce the output:

```shell
direction: north
direction: south
direction: east
direction: west
```
