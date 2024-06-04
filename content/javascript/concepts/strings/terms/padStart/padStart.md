---
Title: '.padStart()'
Description: 'Generates a new string of a specified length by adding a given padding string to the beginning of the original string.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In JavaScript, the **`.padStart()`** method generates a new string of a specified length by adding a given padding string to the beginning of the original string. The padding string is repeated as needed until the target length is reached.

## Syntax

```pseudo
string.padStart(targetLength, padString);
```

- `string`: The original string to be padded.
- `targetLength`: The desired length of the resulting string after padding.
- `padString`: The string used to pad the original string. If this parameter is not provided, the method will use a space (' ') as the default padding string.

## Example

The following codebyte example demonstrates how to use the `.padStart()` method:

```js
const originalString = 'Hi There!';
const padString = '12345';

// Case 1: Pad the original string with spaces until the total length is 15
console.log(originalString.padStart(15));

// Case 2: Pad the original string with '0's until the total length is 14
console.log(originalString.padStart(14, '0'));

// Case 3: Pad the original string with 'padString' until the total length is 11
console.log(originalString.padStart(11, padString));

// Case 4: Pad the original string with 'padString', repeating it as needed until the total length is 21
console.log(originalString.padStart(21, padString));
```

The above code will produce the following output:

```shell
      Hi There!
00000Hi There!
12Hi There!
123451234512Hi There!
```

## Codebyte Example

The following example demonstrates the use of the `.padStart()` method:

```codebyte/javascript
// Declare variables: an original string, a target length for the resulting string, and a padding string
const originalString = 'ABDCEFG';
const padString = '12345'

// Case 1: padString is not specified, so spaces are used for padding by default
console.log(originalString.padStart(10));

// Case 2: targetLength is large enough to incorporate the entire padString for padding
console.log(originalString.padStart(12, padString));

// Case 3: targetLength is not large enough to accommodate the complete padString, so it will be truncated
console.log(originalString.padStart(8, padString));

// Case 4: targetLength is significantly large to include multiple repetitions of the padString
console.log(originalString.padStart(20, padString));
```
