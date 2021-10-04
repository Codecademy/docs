---
Title: 'Assignability'
Description: 'Assignability is how TypeScript can determine whether a value of a particular data type can be assigned to a variable of the same (or another) data type.'
Subjects:
  - 'Web Development'
Tags:
  - 'Assignability'
  - 'Types'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

Assignability is how TypeScript can determine whether a value of a particular data type can be assigned to a variable of the same (or another) data type.

## When/where assignability takes place

TypeScript perfoms assignability checks whenever a value is being assigned into another location in the computer's memory, such as:

- Assigning values to variables.
- Passing arguments to functions.

## Example: Assigning matching data types

In this snippet of code, TypeScript sees that the `spooky` variable is initially assigned a boolean value, so it believes the `spooky` variable should always be of type `boolean`.

Assigning a variable of type boolean later on is allowed, as a type is assignable to itself, but assigning any other type, such as a `string`, is not allowed:

```ts
let spooky = true;

spooky = false; // Ok

spooky = 'skeletons';
// Error: Type 'string' is not assignable to type 'boolean'.
```

## Examples: Comparing object types

When comparing object types, TypeScript will ensure that all the required fields exist in the assigning object type.
It will also ensure that all field that do exist on the types match up.

In the following example, we define an `interface` object called `Skeleton`, which will serve as a blueprint for the following:

- The names of `Skeleton` properties.
- The corresponding `: type` definitions.

the first `receiveSkeleton()` call works because its object argument contains both required properties -`spooky` and `scary`- and they are of the correct types.

```ts
interface Skeleton {
  spooky: boolean;
  scary: boolean;
}

function receiveSkeleton(skeleton: Skeleton) {
  console.log(skeleton.spooky ? 'Spooky ' : 'Not spooky...');
  console.log(skeleton.scary ? 'scary!' : 'Not scary...');
}

receiveSkeleton({ spooky: true, scary: false }); // Ok
```

The second example throws an `Error` because the `spooky` property is of type `string` instead of `boolean`:

```ts
receiveSkeleton({
  spooky: 'Very!',
  scary: true,
});

// Ouptut --> Error: Type 'string' is not assignable to type 'boolean'
```

This third and final example throws an `Error` because the object we passed to `receiveSkeleton` was missing a `scary` property.

```ts
receiveSkeleton({
  spooky: false,
});
```

The following error will occur, per the TypeScript checker:

```
Error: Argument of type '{ spooky: false; }'
is not assignable to parameter of type 'Skeleton'.
Property 'scary' is missing in type '{ spooky: false; }'
but required in type 'Skeleton'.
```
