---
Title: 'Arrays'
Description: 'In TypeScript, arrays are considered to be collections of single, "generic" types of values. All elements must be of the same type of data as prescribed in the array definition.'
Subjects:
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Types'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

In TypeScript, arrays are considered to be collections of single, "generic" types of values. All elements must be of the same type of data as prescribed in the array definition.

## Defining an array

Array types can be inferred during the initialization of a new array.

In this example, the `vowels` array is inferred to consist of elements of type `string`:

```ts
const vowels = ['a', 'e', 'i', 'o', 'u'];

vowels.push('y'); // Ok

vowels.push(7);
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.
```

Arrays can also be defined with the "generic" type of its elements already preset in two ways:

```ts
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

// alternate way using Array class
const altVowels: Array<string> = ['a', 'e', 'i', 'o', 'u'];
```

More than one type can be prescribed in the array definition with the "or" `|` operator:

```ts
const numbers: (string | number)[] = [1, '2', 3, 'four'];

// Alternative syntax
// const numbers: [string, number] = [1, "2", 3, "four"];
```

As long as each element in `numbers` is of type `string` or `number`, it is valid.

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
