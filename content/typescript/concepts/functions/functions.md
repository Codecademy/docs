---
Title: 'Functions'
Description: 'JavaScript functions take in zero or more parameters and return some kind of value. TypeScript will infer the types of both of those areas when possible, and allows to add type declarations on both of them. The types of function parameters work similarly to variable declarations. If the parameter has a default value, it will take on the type of that value. Otherwise you may declare the type of that parameter by adding a type annotation after its name. Here, the logAgeAndName() function explicitly declares age to be of type number, while name is inferred to be of type string from its default value: ts'
Subjects:
  - 'Web Development'
Tags:
  - 'Functions'
  - 'Types'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

JavaScript functions take in zero or more parameters and return some kind of value.
TypeScript will infer the types of both of those areas when possible, and allows to add type declarations on both of them.

## Function Parameters

The types of function parameters work similarly to variable declarations.
If the parameter has a default value, it will take on the type of that value.
Otherwise you may declare the type of that parameter by adding a type annotation after its name.

Here, the `logAgeAndName()` function explicitly declares `age` to be of type `number`, while `name` is inferred to be of type `string` from its default value:

```ts
function logAgeAndName(age: number, name = '(anonymous)') {
  console.log(`${name}, age ${age}`);
}

logAgeAndName(16, 'Mulan'); // Ok
logAgeAndName(0); // Ok

logAgeAndName('Mulan', 16);
// Argument of type 'string' is not assignable to parameter of type 'number'
```

### Optional Parameters

Some function parameters don't have a default value but should still be allowed to be not provided or be equal to `undefined`.
You can mark them as optional in TypeScript by adding a `?` question mark after their name, before any type annotation.
TypeScript will understand that they don't need to be provided, and their type is a union that includes `undefined`.

The following `logFavoriteNumberAndReason()` function indicates `favorite` as a required `number` and `reason` as an optional `string`, so the function must be called with at least a `number`:

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

Most functions are written in a way that TypeScript can infer what value they return by looking at all the `return` statements in the function.
Functions that don't return a value are considered to return type `void`.

In this example, the `getRandomFriend()` function is inferred to return `string` because all its `return`s return a value of type `string`:

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

You can explicitly declare the return type of a function by adding a type annotation after the `)` right parenthesis following its list of parameters.
Doing so can be useful in two situations:

- You'd like to explicitly make sure the function really does return that type
- TypeScript will not attempt to infer the return type of a recursive function

The following recursive `fibonacci()` function needs an explicit `: number` return type annotation for TypeScript to understand it returns type `number`:

```ts
function fibonacci(i: number): number {
  if (i <= 1) {
    return i;
  }

  return fibonacci(i - 1) + fibonacci(i - 2);
}
```

## Function Types

The types of functions may be represented in the type system.
A function type looks a lot like an arrow lambda, but with the return type instead of the function body.

This `withIncrementedValue()` takes in a `receiveNewValue` parameter that itself takes in a `number` and returns nothing.

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

Function parameters' types may be inferred if their parent function is in a location with a known function type.
In the prior example, the `receivedValue` parameter was inferred to be type `number`.
