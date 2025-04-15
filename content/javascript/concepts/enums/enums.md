---
Title: 'Enums'
Description: 'Enums are a data type that can hold a finite number of defined immutable values.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Data Types'
  - 'Enum'
  - 'JavaScript'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In general, **enums** are a data type that can hold a finite number of defined values. The values in enums are not mutable. Though JavaScript has no support for a native enum type, it is possible to define enums using various approaches. These approaches make the code more expressive, self-documenting, and less error-prone.

## Implementing JavaScript Enums

There are three ways to implement enums in JavaScript:

- Using plain objects
- Using `Object.freeze()`
- Using Symbols

### Using Plain Objects

The simplest way to create JavaScript enums is by using plain objects:

```js
const directions = {
  NORTH: 0,
  SOUTH: 1,
  EAST: 2,
  WEST: 3,
};
```

The enum can then be used as follows:

```js
let direction = directions.NORTH;
```

This approach is straightforward and works well for most use cases, but the values can still be modified unless it is explicitly prevented.

### Using `Object.freeze()`

The `Object.freeze()` method is used to create an immutable JavaScript enum:

```js
const directions = Object.freeze({
  NORTH: 0,
  SOUTH: 1,
  EAST: 2,
  WEST: 3,
});
```

This approach ensures that the object and its values cannot be changed, providing a more robust and predictable enum.

### Using Symbols

Symbols are used to create truly unique enum values that are not prone to accidental collisions:

```js
const directions = {
  NORTH: Symbol(0),
  SOUTH: Symbol(1),
  EAST: Symbol(2),
  WEST: Symbol(3),
};
```

This approach guarantees uniqueness and is ideal when there is a need to create enum values that should not clash or be compared to other values carelessly.

## Example 1: Traffic Light Management

This example uses JavaScript enums to display the current traffic light:

```js
const TrafficLight = Object.freeze({
  RED: 'RED',
  YELLOW: 'YELLOW',
  GREEN: 'GREEN',
});

const currentTrafficLight = TrafficLight.GREEN;

console.log(currentTrafficLight);
```

The output for the example will be:

```shell
GREEN
```

## Example 2: Order Status Handling

This example uses JavaScript enums to display the order status:

```js
const StatusOptions = Object.freeze({
  PENDING: 'PENDING',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED',
  CANCELED: 'CANCELED',
});

const orderStatus = StatusOptions.DELIVERED;

console.log(orderStatus);
```

The output for the example will be:

```shell
DELIVERED
```

## Codebyte Example: Role-Based Access Control

This codebyte example uses JavaScript enums to display the access level based on the user role:

```codebyte/javascript
const UserRoles = Object.freeze({
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR',
  VIEWER: 'VIEWER'
});

const userRole = UserRoles.ADMIN;

console.log(userRole);
```

## Frequently Asked Questions

### 1. Can enums be iterated in JavaScript?

Yes. If you use plain objects, you can iterate enums using `Object.keys()` or `Object.values()`. However, enums using Symbols cannot be easily iterated since Symbols are not enumerable by default.

### 2. Are JavaScript enums good for performance?

JavaScript enums generally have negligible performance overhead. In fact, they can improve performance indirectly by reducing bugs and logical errors in your code.

### 3. When should I avoid using enums in JavaScript?

Avoid enums when your values are unlikely to repeat or belong to a limited set. In such cases, using simple variables or constants might be more appropriate. Also, overusing enums for trivial values can make code unnecessarily complex.
