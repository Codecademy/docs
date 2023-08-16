---
Title: '.startsWith()'
Description: 'Checks whether a string begins with the specified characters. It returns true if it does, otherwise false.'
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

The **`.startsWith()`** JavaScript string method checks whether a string begins with the specified characters. It returns `true` if the string begins with the specified characters, otherwise, it returns `false`.

## Syntax

```pseudo
myString.startsWith(substring, position);
```

- The `substring` is the specified characters that will be checked for in the string. It is case-sensitive.
- The `position` is optional. It is the index used to start searching for `substring`. It defaults to 0.

## Example 1

Checking if a string starts with a particular character:

```js
console.log('Do you prefer coffee or tea?'.startsWith('D'));
// Output: true

// In the original string, "D" is capitalized. But in the substring parameter, 'd' is in lowercase:
console.log('Do you prefer coffee or tea?'.startsWith('d'));
// Output: false
```

## Codebyte Example

The following example is runnable and checks if a string, starting at a specified index, starts with a particular substring:

```codebyte/javascript
console.log('Does Codecademy begin with a C?'.startsWith('Code', 5));
// Output: True
```
