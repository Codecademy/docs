---
Title: '.padStart()'
Description: 'Takes an original string and returns a second string to the front in order to change the original string to a specified length.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

Takes an original string and returns a second string to the front in order to change the original string to a specified length.

## Syntax

```pseudo
originalString.padStart(targetLength, padString);
```

- `originalString` starting string value before padding.
- `targetLength` indicates the length the resulting string should be.
- `padString`, (optional) character or string value to pad the original string.

## Examples


Pad a string with spaces:

```js
const string = `Hi There!`;

const paddedString = string.padStart(15);

console.log(paddedString);
// Output:       Hi There!
```

Pad a string with 0s:

```js
const numString = `4457`;

const paddedNumString = numString.padStart(9, 0);

console.log(paddedNumString);
// Output: 000004457
```

Pad a string with a string less than the target length:

```js
const string = 'help!';
const targetLength = 21;
const padString = 'Can you '

const paddedString = string.padStart(targetLength, padString);

console.log(paddedString);
// Output: Can you Can you help!
```

Pad a string with a string more than the target length:

```js
const string = 'help!';
const targetLength = 9
const padString = 'Can you '

const paddedString = string.padStart(targetLength, padString);

console.log(paddedString);
// Output: Can help!
```

## Codebyte Example

The following is runnable, and demonstrates the use of the `.padStart()` method:

```codebyte/javascript
// Declare a string, target length of the resulting string, and pad string
const originalString = 'ABDCEFG';
const padString = '12345'

// Case 1: padString is not specified
console.log(originalString.padStart(10));

// Case 2: targetLength is long enough to include entire padString
console.log(originalString.padStart(12, padString));

// Case 3: targetLength is not long enough to include entire padString
console.log(originalString.padStart(8, padString));

// Case 4: targetLength is more than long enough to include entire padString
console.log(originalString.padStart(20, padString));
```
