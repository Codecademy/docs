---
Title: '.localeCompare()'
Description: 'Determines whether a string comes before, after, or is equal to another string in alphabetical order.'
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

The string method **`.localeCompare()`** returns a number indicating whether the string it operates on comes before, after, or at the same position as the string given as an argument in alphabetical order. The method can take a `locale` as an argument to follow the alphabetical order of a specific language.

## Syntax

```pseudo
string.localeCompare(compareString, locales, options)
```

**Parameters:**

- `compareString`: The string that the reference `string` is compared with.
- `locales` (optional): A string with a language code according to the BCP 47 standard (like "de", fr", "sv"), or an array with multiple strings of such language codes.
- `options` (optional): An object that changes the behavior of the comparison. The `options` are defined by the `Intl.Collator` constructor.

**Return value:**

A number indicating the sort order: `-1` if `string` comes before `compareString`, `1` if `string` comes after `compareString`, or `0` if the `string` and `compareString` are at the same position.

## Example

[Text, code, images, etc. about example 1]

## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```
