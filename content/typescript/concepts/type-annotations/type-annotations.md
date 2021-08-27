---
Title: 'Type Annotations'
Subjects:
  - 'Web Development'
Tags:
  - 'Type Annotations'
  - 'Types'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

Some constructs in TypeScript, such as variables without an initial value or members of interfaces, don't have an initially inferable type.
The TypeScript language includes a TypeScript-specific syntax for defining what type the value is meant to be later on called a type annotation.

Type annotations consist of a `:` colon followed by the name of a type.
They exist after the name of the construct they're declaring the type for.

- Class and interface members: `date: Date;`
- Parameters: `function takeDate(date: Date) {`
- Variables: `let date: Date;`

In the following code snippet, the `date` variable doesn't have an initial value, but does declare that later on it must receive `Date`s with a type annotation.
Later assigning a new `Date` is the right type, but the number `10.31` is not:

```ts
let date: Date;

genre = new Date('2021-10-31'); // Ok

genre = 10.31;
// Error: type 'number' is not assignable to type 'Date'.
```

TypeScript type annotations don't get compiled down to the output JavaScript, as they are a TypeScript syntax and not JavaScript.
Removing comments, the above code would look roughly like this if run through the TypeScript compiler (`tsc`):

```ts
let date;
genre = new Date('2021-10-31');
genre = 10.31;
```
