---
Title: 'Functions'
Description: 'With functions, TypeScript infers the types of its parameters as well as any return value.'
Subjects:
  - 'Web Development'
Tags:
  - 'Functions'
  - 'Types'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

With **functions**, TypeScript infers the types of its parameters as well as any return value.

## Function Parameters

The types of function parameters work similarly to variable declarations. If the parameter has a default value, it will take on the type of that value. Otherwise, we may declare the type of that parameter by adding a type annotation after its name.

Here, the `logAgeAndName()` function explicitly declares `age` to be of type `number`, while `name` is inferred to be of type `string` from its default value:

```ts
function logAgeAndName(age: number, name = '(anonymous)') {
  console.log(`${name}, age ${age}`);
}

logAgeAndName(16, 'Mulan'); // ok: Mulan, age 16

logAgeAndName(0); // also ok: (anonymous), age 0

logAgeAndName('Mulan', 16);
// Argument of type 'string' is not assignable to parameter of type 'number'
```

The last use of `logAgeAndName()` shows that the order of the parameters passed to the function matter. The first argument is expected to be of type `number` while the second is inferred to be of type `string`.

### Optional Parameters

Function parameters can be made optional by adding a `?` question mark after their name, before any type annotation. TypeScript will understand that they don't need to be provided when the function is invoked. Additionally, their type is a union that includes `undefined`. This means that if a given function does not use the optional parameter, its value is set to `undefined`.

The following `logFavoriteNumberAndReason()` function indicates `favorite` as a required `number` and `reason` as an optional `string`, so the function must be called with at least one `number` parameter:

```ts
function logFavoriteNumberAndReason(favorite: number, reason?: string) {
  console.log(`Favorite: ${favorite}!`);

  if (reason) {
    console.log(`Because: ${reason}!`);
  }
}

logFavoriteNumberAndReason(7, 'an esoteric video game reference'); // Ok
logFavoriteNumberAndReason(9001); // Ok

logFavoriteNumberAndReason();
// Error: Expected 1-2 arguments, but got 0.
```

## Return Types

Most functions are written in a way that TypeScript can infer what value they return by looking at all the `return` statements in the function. Functions that don't return a value are considered to have a return type of `void`.

In this example, the `getRandomFriend()` function is inferred to return a `string` type because all `return` statements have a value of type `string`, including the `fallback` parameter:

```ts
function getRandomFriend(fallback: string) {
  switch (Math.floor(Math.random() * 5)) {
    case 0:
      return 'Josh';
    case 1:
      return 'Sara';
    case 2:
      return 'Sonny';
    default:
      return fallback;
  }
}

const friend = getRandomFriend('Codey'); // Type: string
```

The return type of a function can be declared by adding a type annotation after the `)` right parenthesis following its list of parameters. Doing so can be useful in two situations:

- We can make sure the function returns that type.
- TypeScript will not attempt to infer the return type of a recursive function.

The following recursive `fibonacci()` function needs an explicit `: number` return type annotation for TypeScript to understand it. This returns type `number`:

```ts
function fibonacci(i: number): number {
  if (i <= 1) {
    return i;
  }

  return fibonacci(i - 1) + fibonacci(i - 2);
}
```

## Function Types

Function types may be represented in the type system. They look a lot like an arrow lambda, but with the return type instead of the function body.

This `withIncrementedValue()` takes in a `receiveNewValue` parameter function that itself takes in a `number` and returns nothing (`void`).

```ts
let value = 0;

function withIncrementedValue(receiveNewValue: (newValue: number) => void) {
  value += 1;
  receiveNewValue(value);
}

withIncrementedValue((receivedValue) => {
  console.log('Got', receivedValue);
});
```

Function parameter types may be inferred if their parent function is in a location with a known function type. In the prior example, the `receivedValue` parameter was inferred to be type `number`.
