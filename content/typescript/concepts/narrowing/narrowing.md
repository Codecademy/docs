---
Title: 'Narrowing'
Description: 'Union types represent entities that may be one of two or more different types. Because they only allow access to members known to be on all possible types, you need to narrow down a value to a more specific type before using non-shared members. TypeScript recognizes types as being narrowed when it sees JavaScript logic branches based on the type of code. If an area of code can only be reached if a value is of a particular type, TypeScript will infer the value to be of that type in that branch. For example, in this code, value is of type string | undefined, but TypeScript narrows it down to string in the if statements body. It knows the value cant be undefined and still reach block of code, though outside of the block there is no narrowing: ts'
Subjects:
  - 'Web Development'
Tags:
  - 'Type Narrowing'
  - 'Types'
  - 'Union Types'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

Union types represent entities that may be one of two or more different types.
Because they only allow access to members known to be on all possible types, you need to narrow down a value to a more specific type before using non-shared members.

TypeScript recognizes types as being narrowed when it sees JavaScript logic branches based on the type of code.
If an area of code can only be reached if a value is of a particular type, TypeScript will infer the value to be of that type in that branch.

For example, in this code, `value` is of type `string | undefined`, but TypeScript narrows it down to `string` in the `if` statement's body.
It knows the value can't be `undefined` and still reach block of code, though outside of the block there is no narrowing:

```ts
function logValueIfExists(value: string | undefined) {
  value; // Type: string | undefined

  if (value) {
    console.log(`Yay! ${value}`);

    value; // Type: string
    value.length; // Type: number
  }

  value.length;
  // Error: Object is possibly 'undefined'.
}
```
