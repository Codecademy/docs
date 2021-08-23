---
Title: 'Function'
Subjects:
  - 'Web Development'
Tags:
  - 'Functions'
  - 'Types'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

Some type system constructs, such as type unions and intersections, consist of a lot of code and are repeated frequently enough that it's irksome to have to write them out repeatedly.
TypeScript allows creating an alias for these with the `type` keyword and a name.
Later on, whenever the name is used, TypeScript will assume you meant the aliased value.

In this example, the `StringsIsh` type alias can be used in place of the type union with several members:

```ts
type StringsIsh = string | string[] | null | undefined;

function logAllStrings(values: StringsIsh) {
  if (typeof values === 'string') {
    console.log(values);
  } else {
    values.forEach(logAllStrings);
  }
}

logAllStrings('hello'); // Ok
logAllStrings(['hello', 'world']); // Ok
```

Type aliases may be generic and may contain any type description, including primitives, literals, and object types.

The following `Result<T>` type may contain a value or an object containing the value:

```ts
type Result<T> = T | { value: T };

let value: Result<string> = 'hello'; // Ok
let other: Result<string> = { value: 'world' }; // Ok
```
