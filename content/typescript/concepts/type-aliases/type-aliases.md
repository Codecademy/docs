---
Title: 'Type Aliases'
Description: 'In TypeScript, type aliases create type definitions, using the `type` keyword and a name, that can be reused throughout the code.'
Subjects:
  - 'Web Development'
Tags:
  - 'Functions'
  - 'Types'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

In TypeScript, **type aliases** create type definitions that can be reused throughout the code. This is unlike type unions and intersections, where the explicit type information is used repetitively.

## Syntax

Type aliases require the `type` keyword and a name. They can be created in two ways.

- They can be set as an object that describes the members and their respective types.

```ts
type myType = {
  memberOne: string;
  memberTwo: number;
}

let favoriteNum: myType = {"my favorite number is ", 42}
```

- They can also refer to other known types, like a union type.

```ts
type myType = string | number;

let favoriteNum: myType = '42';
```

Later on, whenever the name is used, TypeScript will assume this refers to the aliased value. Type aliases are similar to `interface`s in terms of syntax and behavior. However, a key difference is that an `interface` can have members added later on whereas type aliases can't be changed after being defined.

## Type Aliases with Type Guards

In this example, the `StringsIsh` type alias can be used in place of the type union with several members. When applied to the `logAllStrings()` function:

```ts
type StringsIsh = string | string[] | null | undefined;

function logAllStrings(values: StringsIsh) {
  if (values === null || typeof values === 'undefined') return;

  if (typeof values === 'string') {
    console.log(values);
  } else {
    values.forEach(logAllStrings);
  }
}

logAllStrings('hello'); // Ok
logAllStrings(['hello', 'world']); // Also Ok
```

The first type guard checks to see if `values` matches either `null` or `undefined` in the `StringIsh` type alias. Next, the `if/else`-statement checks for a base case of `values` being of type `string`. Otherwise, it recursively invokes `logAllStrings` again.

## Type Aliases as Generics

Type aliases may be generic and may contain any type description, including:

- Primitives
- Literals
- Object types

The following `Result<T>` type may contain a value, `T`, or an object containing the value, `{ value: T }`:

```ts
type Result<T> = T | { value: T };

let value: Result<string> = 'hello'; // Ok
let other: Result<string> = { value: 'world' }; // Also Ok
```
