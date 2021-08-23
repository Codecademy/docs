---
Title: 'Variables'
Subjects:
  - 'Web Development'
Tags:
  - 'Variables'
CatalogContent:
  - 'learn-typescript'
  - 'paths/web-development'
---

Variables in TypeScript are generally inferred to be whatever basic type of value they initially start with.
Later in code, only values that are of that same basic type may be assigned to the variable.
The term for whether a type is assignable to another type is _assignability_.

In this snippet of code, TypeScript sees that the `spooky` variable is initially assigned a boolean value, so it believes the `spooky` variable should always be type `boolean`.
Assigning a variable of type boolean later on is allowed, as a type is assignable to itself:

```ts
let spooky = true;

spooky = false; // Ok
```

If a variable is assigned a different type of value, TypeScript will notice and emit a type checking complaint.
Those type checking complaints can be surfaced as errors on the command-line, or in whatever editor you're using to write TypeScript code.

In this code snippet, the `scary` variable is initially assigned the value `"skeletons"`, which is a string.
Later, assigning the number `10.31` is not allowed because a number is not assignable to a string:

```ts
let scary = 'skeletons';

scary = 10.31;
// Error: Type 'number' is not assignable to type 'string'
```
