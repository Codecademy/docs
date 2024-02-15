---
Title: 'Type Annotations'
Description: 'TypeScript uses type annotation to explicitly type things such as variables, functions, and classes.'
Subjects:
  - 'Web Development'
Tags:
  - 'Type Annotations'
  - 'Types'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

TypeScript uses type annotation to explicitly type things such as variables, functions, and classes.

For the most part, TypeScript does a good job at inferring types from the codebase at build-time. However, some constructs in TypeScript, such as variables without an initial value or members of interfaces, don't have an initially inferable type. This is where type annotations can be really useful.

## Syntax

Type annotations consist of a `:` colon followed by the name of a type.
They exist after the name of the construct they're declaring the type for.

```ts
// Class and interface members
class myClass {
  memberOne: string;
  memberTwo: string;
}

interface myInterface {
  memberOne: string;
  memberTwo: number;
  memberThree: boolean;
}

// Function Parameters
function myFunc(memberOne: string, memberTwo: string) {
  ...
}

// Function Returns
function myFunc(memberOne, memberTwo): string {
  return memberOne + memberTwo;
}

// Variables
let myVar: string = "Hello, World!";
```

## Type Annotations and `Date`s

In the following code snippet, the `date` variable doesn't have an initial value, but with a `Date` type annotation. Later on, when `date` is assigned a value, it must receive a value of type `Date`. The first assignment of a new `Date` is the right type. However, the second assignment to a number, `10.31`, is not:

```ts
let date: Date;

date = new Date('2021-10-31'); // Ok

date = 10.31;
// Error: type 'number' is not assignable to type 'Date'.
```

## After TypeScript is Compiled

TypeScript type annotations don't get compiled down to the output JavaScript, as they are a TypeScript syntax and not JavaScript. Removing comments from the above code would make it look roughly like this if run through the TypeScript compiler (`tsc`):

```ts
let date;
date = new Date('2021-10-31');
date = 10.31;
```
