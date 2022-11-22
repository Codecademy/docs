---
Title: 'UUID'
Description: 'UUID is a universally unique identifier. It can be generated on any computer without the use of a centralized authority.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Id'
  - 'NPM'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/computer-science'
---

A **universally unique identifier (UUID)** is a string of 128 bits that is supposed to be unique with little to no chance of clashing with any other UUIDs produced by anybody else in the world. It can be generated on any computer without the use of a centralized authority.

UUIDs are usually used in database tables as unique keys. They are useful any time we need an ID that needs to be unique in an application or system.

## Format

A UUID is usually represented as 32 hexadecimals, separated in five groups by 4 hyphens. For example:

```pseudo
123e4567-e89b-12d3-a456-42661417400
```

So a total of 36 characters in the form `8-4-4-4-12`.

## UUID Example in JavaScript

UUIDs can be used in JavaScript with the [uuid](https://www.npmjs.com/package/uuid) package. The package can be installed via [npm](https://www.codecademy.com/resources/docs/javascript/npm):

```shell
npm install uuid
```

This example shows how to generate a UUID with the `uuidv4()` function:

```js
const { v4: uuidv4 } = require('uuid');

console.log(uuidv4());
// Output: 7637c099-79c8-4685-ad47-b1b985f7ac2b
```
