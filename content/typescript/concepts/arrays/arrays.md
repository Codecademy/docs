---
Title: 'Arrays'
Description: 'Arrays in TypeScript are considered to be "generic" across a single type of value. Once an array is known to contain a particular type of value, only that type is allowed in the array. Array types can be inferred from initial values in the array. In this example, the vowels array is inferred to consist of strings, and will allow pushing only strings: ts const vowels = [a, e, i, o, u]; vowels.push(y); // Ok'
Subjects:
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Types'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

Arrays in TypeScript are considered to be "generic" across a single type of value.
Once an array is known to contain a particular type of value, only that type is allowed in the array.

Array types can be inferred from initial values in the array.

In this example, the `vowels` array is inferred to consist of `string`s, and will allow pushing only `string`s:

```ts
const vowels = ['a', 'e', 'i', 'o', 'u'];

vowels.push('y'); // Ok

vowels.push(7);
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.
```

## Array Types

An array type consists of the type of values inside the array followed by square brackets `[]`.
Arrays without any initial contents may be declared as that type to tell TypeScript what will later go into them.

In this example, `dates` doesn't initially include a value, so declaring it as `Date[]` tells TypeScript what's allowed in it:

```ts
const dates: Date[] = [];

dates.push(new Date('2021-12-1994')); // Ok

dates.push(10241995);
// Error: Argument of type 'number' is not assignable to parameter of type 'Date'.
```
