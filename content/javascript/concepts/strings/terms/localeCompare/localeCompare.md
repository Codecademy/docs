---
Title: '.localeCompare()'
Description: 'Compares two strings based on the current locale, returning a number that indicates their sort order.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Comparison'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In JavaScript, the **`.localeCompare()`** method returns a number indicating whether the reference string comes before, after, or is the same as the given string in locale-aware lexicographic order. It can take a locales argument to follow the sorting rules of specific languages.

## Syntax

```pseudo
string.localeCompare(compareString, locales, options)
```

**Parameters:**

- `compareString`: The string to compare with the reference string (the one `.localeCompare()` is called on).
- `locales` (optional): A string containing a BCP 47 language tag (e.g., `"en"`, `"de"`, `"fr"`), or an array of such strings, specifying the locale(s) to use.
- `options` (optional): An object that customizes the comparison behavior. The accepted properties are defined by the `Intl.Collator` constructor (e.g., `sensitivity`, `numeric`, `ignorePunctuation`, etc.).

**Return value:**

Returns a number indicating the sort order between the reference string and the `compareString`:

- `-1` if the reference string comes before `compareString`
- `0` if the strings are equal
- `1` if the reference string comes after `compareString`

> **Note:** The exact result of `.localeCompare()` can vary depending on the specified `locales` and `options`. While the return value is always negative, zero, or positive, the exact numeric value (e.g., `-1`, `1`) may vary across browsers and environments. Therefore, it's best to check the sign of the result rather than its exact value.

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

Run the following codebyte to understand how `.localeCompare()` works with different `locales`:

```codebyte/javascript
const germanComparison = "z".localeCompare("ä", "de");
const swedishComparison = "z".localeCompare("ä", "sv");

console.log(`German locale: ${germanComparison}`);
console.log(`Swedish locale: ${swedishComparison}`);
```
