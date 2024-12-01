---
Title: 'Substring'
Description: 'Extracts a portion of a string between two given indices and returns a new string. If only one index is given, it goes to the end.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods '
  - 'Data Types '
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

The **`substring()`** method in JavaScript extracts a portion of a string from one position to another (exclusive) and returns a new string. If the second position is omitted, it returns characters from the first position to the end of the string.

## Syntax

```pseudo
// Returns characters from startIndex to end of string
string.substring(startIndex);
```

Or alternatively:

```pseudo
// Returns characters from startIndex to endIndex
string.substring(startIndex, endIndex);
```

## Details

- `.substring()` returns characters from the start index up to, but not including, the character at the end index.

- If the end index is omitted, `.substring()` returns characters from the start index through the end of the string.

- If the start and end indices are equal, `.substring()` returns an empty string.

- Indices that are less than zero or are `NaN` are interpreted as zero.

- Indices that are greater than `string.length` are treated as `string.length`.

- If the first argument is greater than the second argument, the first argument is treated as the end index and the second argument is treated as the start index.

## Example 1

Using `.substring()` to display characters from a given string.

```js
const str = 'Codecademy';

console.log(str.substring(0, 4));
console.log(str.substring(4, 0));
console.log(str.substring(-4, 4));
// Output: "Code"

console.log(str.substring(4));
console.log(str.substring(4, 99));
// Output: cademy
```

## Example 2

Using `.substring()` to display the last `6` characters from a given string.

```js
const str = 'Codecademy';

console.log(str.substring(str.length - 6));
// Output: cademy
```

## Codebyte Example

Run the following code to understand how the `.substring()` method works:

```codebyte/javascript
const sentence = 'Hello, world!';

const greeting = sentence.substring(0, 5);
const exclamation = sentence.substring(7, 12);

console.log(greeting);
console.log(exclamation);
```
