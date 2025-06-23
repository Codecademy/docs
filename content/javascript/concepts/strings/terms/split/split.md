---
Title: '.split()'
Description: 'Returns a new array of substrings based on a given string.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Formatting'
  - 'Functions'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In JavaScript, the **`.split()`** method returns a new [array](https://www.codecademy.com/resources/docs/javascript/arrays) of substrings based on a given string. This method is useful for parsing CSV data, processing user input, or breaking apart text for analysis.

## Syntax

```pseudo
string.split(separator, limit);
```

**Parameters:**

- `separator` (Optional): Describes the pattern where each split should occur.
- `limit` (Optional): Determines the number of substring elements included in the returned array.

**Return value:**

The `.split()` method returns a new array of substrings based on a given string.

> **Note:** If `separator` is not provided, the returned array will contain the entire `string` as its lone element.

## Example 1: Using `.split()` Without `limit`

This example uses the `.split()` method without the `limit` parameter to split the `stringOfNames` string into an array of names:

```js
const stringOfNames = 'Dominic, Shelly, Luka, Devin';

console.log('No limit:', stringOfNames.split(', '));
```

Here is the output:

```shell
No limit: [ 'Dominic', 'Shelly', 'Luka', 'Devin' ]
```

## Example 2: Using `.split()` with `limit`

This example uses the `.split()` method with the `limit` parameter to split the `stringOfNames` string into an array of names limited to 3 elements:

```js
const stringOfNames = 'Dominic, Shelly, Luka, Devin';

console.log('Limited to 3 elements:', stringOfNames.split(', ', 3));
```

Here is the output:

```shell
Limited to 3 elements: [ 'Dominic', 'Shelly', 'Luka' ]
```

## Codebyte Example: Using `.split()` Without Parameters

This example uses the `.split()` method without any parameters to split the `stringOfNames` string into an array of names in a string:

```codebyte/javascript
const stringOfNames = 'Dominic, Shelly, Luka, Devin';

let arrayOfNames = stringOfNames.split();

console.log(arrayOfNames);
```

## Frequently Asked Questions

### 1. Can I use regular expressions with `.split()`?

Yes. Regular expressions can be used with `.split()` for more flexible and complex splitting logic:

```js
// Uses the separators '-' and '_'
let substr = 'one-two_three'.split(/[-_]/);

console.log(substr); // [ 'one', 'two', 'three' ]
```

### 2. What if the separator in `.split()` is an empty string?

Splitting on an empty string using `.split()` breaks the string into an array of individual characters:

```js
let substr = 'ABC'.split('');

console.log(substr); // [ 'A', 'B', 'C' ]
```

### 3. What happens with consecutive separators in `.split()`?

Empty strings appear in the result if there are consecutive separators in `.split()`:

```js
let substr = 'a,,b'.split(',');

console.log(substr); // [ 'a', '', 'b' ]
```
