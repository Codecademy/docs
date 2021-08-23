---
Title: 'Assignability'
Subjects:
  - 'Web Development'
Tags:
  - 'Assignability'
  - 'Types'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

Assignability is the concept of whether a type may be used in a place where another type is needed.
TypeScript perfoms assignability checks whenever a value is being placed into another location, such as:

- Assigning values to variables
- Passing arguments to functions

In this snippet of code, TypeScript sees that the `spooky` variable is initially assigned a boolean value, so it believes the `spooky` variable should always be type `boolean`.
Assigning a variable of type boolean later on is allowed, as a type is assignable to itself, but a `string` assignment is not allowed:

```ts
let spooky = true;

spooky = false; // Ok

spooky = 'skeletons';
// Error: Type 'string' is not assignable to type 'boolean'.
```

When comparing object types, TypeScript will ensure that all the required fields exist in the assigning object type.
It will also ensure that all field that do exist on the types match up.

In the following example, the first `receiveSkeleton` call is allowed because it has both required fields -`spooky` and `scary`- and they are of the correct types.
The second example contains a type error because `spooky` is of type `string` instead of `boolean`, and the third contains a type error for missing `spooky` altogether:

```ts
interface Skeleton {
  spooky: boolean;
  scary: boolean;
}

function receiveSkeleton(skeleton: Skeleton) {
  console.log(skeleton.spooky ? 'Spooky ' : 'Not spooky ');
  console.log(skeleton.scary ? 'scary!' : ' not scary...');
}

receiveSkeleton({ spooky: true, scary: false }); // Ok

receiveSkeleton({
  spooky: 'Very!',
  // Error: Type 'string' is not assignable to type 'boolean'
  scary: true,
});

receiveSkeleton({
  scary: false,
});
// Error: Argument of type '{ spooky: false; }'
// is not assignable to parameter of type 'Skeleton'.
//    Property 'scary' is missing in type '{ spooky: false; }'
//    but required in type 'Skeleton'.
```
