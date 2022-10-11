---
Title: 'Narrowing'
Description: 'Narrowing is a TypeScript process that refines a value of multiple types into a single, specific type.'
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

**Narrowing** is a TypeScript process that refines a value of multiple types into a single, specific type.

[Union types](https://www.codecademy.com/resources/docs/typescript/unions) represent entities that may be one of two or more different types. Because they only allow access to members known to be on all possible types, we need to narrow down a value to a more specific type before using non-shared members.

## Where Narrowing Happens

TypeScript recognizes types as being narrowed when it sees branches of JavaScript control-flow logic, including:

- Conditional statements like `if/else`, ternaries, and switches.
- Looping statements, such as `for`- and `while`-loops.
- Truthiness checks for entities that don't point to `false`-like values.

If an area of code can only be reached if a value is of a particular type, TypeScript will infer the value to be of that type in that control flow branch.

## Example: Narrowing with `if` Statement

In this example, our `logValueIfExists()` function accepts a `value` parameter with a union-type of `string | undefined`. If we want TypeScript to explicitly narrow our `value` down to a `string` type, we can use an `if` statement to act as a "type guard".

```ts
function logValueIfExists(value: string | undefined) {
  if (typeof value === 'string') {
    console.log(`Yay! ${value}!`);
  }
}

logValueIfExists('narrowing');
// output: Yay! narrowing!
```

We invoked `logValueIfExists()` with a string variable, "narrowing". Since the `value` is of type `string`, the code in the `if` statement will run and a new string will be logged to the console.

## Example: Narrowing With Truthiness

In the example below, we changed the `if` statement slightly to check if `value` has any value that is "truthy" and doesn't evaluate to a falsey value such as `0`, `false`, or `undefined`.

```ts
function logValueIfExists(value: string | undefined) {
  value; // Type: string | undefined

  if (value) {
    console.log(`Yay! ${value}!`);

    value; // Type: string
    value.length; // Type: number
  }

  value.length;
  // Error: Object is possibly 'undefined'.
}

logValueIfExists('truthiness');
// output: Yay! truthiness!

let newValue;
logValueIfExists(newValue);
// newValue is "undefined"; nothing is logged.
```

Outside of the `if` statement, `value` is a union type (`string | undefined`) and is not narrowed, meaning that calling `value.length` won't work. Inside the `if` statement, because `value` was narrowed to a `string` type, it now has a `length` property.
