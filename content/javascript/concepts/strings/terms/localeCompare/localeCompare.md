---
Title: '.localeCompare()'
Description: 'Determines whether a string comes before, after, or at the same position as another string in alphabetical order.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Comparison'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The string method **`.localeCompare()`** returns a number indicating whether the reference string it operates on comes before, after, or at the same position as the given string in alphabetical order. The method can take `locales` as an argument to follow the alphabetical order of specific languages.

## Syntax

```pseudo
string.localeCompare(compareString, locales, options)
```

**Parameters:**

- `compareString`: The string that the reference string is compared with.
- `locales` (optional): A string with a language code according to the BCP 47 standard (like "de," "fr," "sv"), or an array with multiple strings of such language codes.
- `options` (optional): An object that changes the behavior of the comparison. The `options` that can be used are defined by the `Intl.Collator` constructor.

**Return value:**

A number indicating the sort order:

- a negative number (for example, `-1`) if the reference string comes before `compareString`.
- a positive number (for example, `1`) if the reference string comes after `compareString`.
- `0` if the reference string and `compareString` are at the same position.

The exact positive and negative numbers that `.localeCompare()` returns may vary between browsers.

## Example

This example shows how to use `.localeCompare()` to get the alphabetical order of a string compared to a reference string:

```js
const comparison1 = 'boat'.localeCompare('car');
const comparison2 = 'boat'.localeCompare('airplane');
const comparison3 = 'boat'.localeCompare('BOAT', 'en', { sensitivity: 'base' }); // option argument to make the comparison case insensitive

console.log(`"boat" compared with "car": ${comparison1}`);
console.log(`"boat" compared with "airplane": ${comparison2}`);
console.log(`"boat" compared with "BOAT": ${comparison3}`);
```

The output of this code is:

```shell
"boat" compared with "car": -1
"boat" compared with "airplane": 1
"boat" compared with "BOAT": 0
```

## Codebyte Example

Run the following code to understand how `.localeCompare()` works with different `locales`:

```codebyte/javascript
const germanComparison = "z".localeCompare("ä", "de");
const swedishComparison = "z".localeCompare("ä", "sv");

console.log(`German locale: ${germanComparison}`);
console.log(`Swedish locale: ${swedishComparison}`);
```
