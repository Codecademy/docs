---
Title: 'Primitives'
Subjects:
  - 'Web Development'
Tags:
  - 'Literals'
  - 'Primitives'
  - 'Types'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

A primitive is one of the basic types in JavaScript that make up data other than functions and objects.
TypeScript recognizes the seven primitive types in JavaScript:

- `bigint`
- `boolean`
- `null`
- `number`
- `string`
- `symbol`
- `undefined`

If a value such as a parameter or variable is declared to be one of these, it is allowed to be assigned any of the literal values that are of that primitive type.

In this example, the variable `decoration` is initially declared to be type `string`, so it's allowed a plethora of string values:

```ts
let decoration: string;

decoration = 'Cobweb';
decoration = "Jack O'Lantern";
decoration = 'Lights';
```

In other words:

- A **primitive** is a basic type of data, such as `number` or `string`
- A **literal** is an example of a primitive, such as `1337` or `"ghost"`
