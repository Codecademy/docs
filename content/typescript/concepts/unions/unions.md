---
Title: 'Unions'
Description: 'Some values can have more than one possible type. TypeScript represents these either-or types using a union.'
Subjects:
  - 'Web Development'
Tags:
  - 'Unions'
  - 'Types'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

Some values may be one of multiple possible types. TypeScript refers to these "either or" types as type unions. This refers to the set theory concept of being a "union" of multiple possible types.

## Syntax

A union type is written as a series of other types with a `|` vertical pipe between them.

```ts
let myVar: number | string = '42';
```

## Union Example

For example, the following `logEither()` function takes in a value that can be either a `number` or `string`:

```ts
function logEither(value: number | string) {
  console.log(value);
}

logEither('Durandal'); // Ok
logEither(7777777); // Also Ok

logEither(false);
// Error: Type 'boolean' is not assignable to type 'number | string'.
```

Optional parameters and properties are given a union type with undefined (e.g., `string | undefined`).

## Union type Members

When a value is a union type, TypeScript will only allow access to members that exist on all possible types.

In this example, we use a pair of ternary operators to create a `value`. This sets the type of `value` to `boolean | string | string[]` and the shared member is the `toString()` function. No others, such as `length`, are allowed since it can't be applied to a `boolean`-type value:

```ts
// Type: boolean | string | string[]
const value =
  Math.random() > 0.5
    ? false
    : Math.random() > 0.5
    ? 'Leela'
    : ['Durandal', 'Thoth'];

value.toString(); // Ok: exists on all three

value.length;
/*
 * Error: Property 'length' does not exist
 * on type 'false | "Leela" | string[]'.
 * Property 'length' does not exist on type 'false'.
 */
```

See [Narrowing](https://www.codecademy.com/resources/docs/typescript/narrowing) for how to narrow down union types into their more specific types.
