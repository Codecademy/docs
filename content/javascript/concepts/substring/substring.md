---
Title: 'Substring'
Description: 'The .substring() method returns part of a string. If given two arguments, they are the start and end indexes of the characters returned. If given one argument, it returns characters from that point to the end of the string. javascript // Returns characters from startIndex to end of string string.substring(startIndex); // Returns characters from startIndex to endIndex string.substring(startIndex, endIndex); '
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

The `.substring()` method returns part of a string. If given two arguments, they are the start and end indexes of the characters returned. If given one argument, it returns characters from that point to the end of the string.

## Syntax

```javascript
// Returns characters from startIndex to end of string
string.substring(startIndex);

// Returns characters from startIndex to endIndex
string.substring(startIndex, endIndex);
```

## Details

- `.substring()` returns characters at the start index up to, but not including, the character at the end index.

- If the end index is omitted `.substring()` returns characters at the start index up through the end of the string.

- If the start and end indexes are equal, `.substring()` returns an empty string.

- Indexes less than zero are interpreted as zero.

- Indexes that are `NaN` are treated as zero.

- Indexes that are greater than `string.length` are treated as `string.length`.

- If the first argument is greater than the second argument, the first argument is treated as the end index and the second argument is treated as the start index.

## Example 1

Using `.substring()` to display characters from a given string.

```javascript
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

```javascript
const str = 'Codecademy';

console.log(str.substring(str.length - 6));
// Output: cademy
```
