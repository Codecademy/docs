---
Title: '.split()'
Description: 'Returns a new array of substrings based on a given string.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Functions'
  - 'Methods'
  - 'Formatting'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.split()`** method returns a new [array](https://www.codecademy.com/resources/docs/javascript/arrays) of substrings based on a given string.

## Syntax

```pseudo
string.split(separator, limit);
```

The `separator` (optional) describes the pattern where each split should occur. It may be one of the following:

- A string of one or more characters.
- A [regular expression](https://www.codecademy.com/resources/docs/javascript/regexp).

If a `separator` is not provided, the returned array will contain the entire `string` as its lone element.

The `limit` (also optional) determines the number of substring elements included in the returned array.

## Example

The following example splits a string into an array of names:

```js
const stringOfNames = 'Dominic, Shelly, Luka, Devin';

console.log('No limit:', stringOfNames.split(', '));

console.log('Limited to 3 elements:', stringOfNames.split(', ', 3));
```

This will log the following output:

```shell
No limit: [ 'Dominic', 'Shelly', 'Luka', 'Devin' ]
Limited to 3 elements: [ 'Dominic', 'Shelly', 'Luka' ]
```

## Codebyte Example

The following example showcases the `.split()` in two ways:

1. Not including a `separator` returns an `arrayOfNames` with the entire `stringOfNames` as the sole element.
2. The `arrayOfNames` is reassigned with a `separator` and then traversed with `.split()` being invoked on each name.

```codebyte/javascript
const stringOfNames = 'Dominic, Shelly, Luka, Devin';

let arrayOfNames = stringOfNames.split();

console.log("No separator; entire string is lone element:\n", arrayOfNames, "\n");

arrayOfNames = stringOfNames.split(`, `);

// Iterate through arrayOfNames and .split() each name string into separate characters.
for(let i = 0; i < arrayOfNames.length; i++) {
  console.log(arrayOfNames[i].split(""));
};
```
