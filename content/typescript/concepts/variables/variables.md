---
Title: 'Variables'
Description: 'In TypeScript, besides being typed, variables are expected to follow the same rules and guidelines that they do with JavaScript.'
Subjects:
  - 'Web Development'
Tags:
  - 'Variables'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

In TypeScript, besides being typed, variables are expected to follow the same rules and guidelines that they do with JavaScript.

## Syntax

TypeScript variables are generally inferred to be whatever basic type of value they are initially assigned with. Later in code, only values that are of that same basic type may be assigned to the variable. The term for whether a type is assignable to another type is assignability.

```ts
let myVar: string;

myVar = 'Hello'; // Ok
myVar = 'World!'; // Also Ok
myVar = 42; // Not Ok: Type 'number' is not assignable to type 'string'.
```

## Examples with Variables

In this snippet of code, TypeScript sees that the `spooky` variable is initially assigned a `boolean` value, so it believes the `spooky` variable should always be of type `boolean`. Assigning a variable of type `boolean` later on is allowed, as a type is assignable to itself:

```ts
let spooky = true;

spooky = false; // Ok
```

If a variable is assigned a different type of value, TypeScript will notice and emit a type checking complaint. Those type checking complaints can be surfaced as:

- Errors on the command-line.
- Syntax highlights in the code editor.

In this code snippet, the `scary` variable is initially assigned the value `"skeletons"`, which is a `string` type. Later, assigning the decimal number `10.31` is not allowed because a `number` type is not assignable to a variable of type `string`:

```ts
let scary = 'skeletons';

scary = 10.31;
// Error: Type 'number' is not assignable to type 'string'
```
