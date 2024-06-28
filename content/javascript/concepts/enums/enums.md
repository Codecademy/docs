---
Title: 'Enums'
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

JavaScript has no support for a native **enum** type, but it is possible to define enums using `Object`s. In general, enums are a type that can hold a finite number of defined values. The values in enums are not mutable.

## Implementing an Enum in JavaScript

A way to implement an enum in JavaScript by creating an `Object` of key/value pairs and using the `Object.freeze()` function to make it immutable:

<!-- prettier-ignore-start -->
```js
const directions = Object.freeze({ 
  north: 0,
  south: 1,
  east: 2,
  west: 3
});
```
<!-- prettier-ignore-end -->

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

## Codebyte Example

This codebyte example demonstrates the creation of an `enum` using `Object.freeze()`, how to use the enum values, and list all possible enum values:

```codebyte/javascript
const UserRoles = Object.freeze({ 
  ADMIN: 'admin',
  EDITOR: 'editor',
  VIEWER: 'viewer'
});

let userRole = UserRoles.ADMIN;
console.log(userRole); 

function canEdit(userRole) {
  return userRole === UserRoles.ADMIN || userRole === UserRoles.EDITOR;
}

console.log(canEdit(UserRoles.ADMIN));  
console.log(canEdit(UserRoles.EDITOR)); 
console.log(canEdit(UserRoles.VIEWER)); 

Object.keys(UserRoles).forEach((role) =>
  console.log('role:', role)
);
```