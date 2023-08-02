---
Title: '.startsWith()'
Description: 'Checks whether a string begins with the specified characters. It will only return a boolean value, either true or false.'
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

The `.startsWith()` Javascript string method checks whether a string begins with the specified characters. It will only return a boolean value, either `true` or `false`.

## Syntax

```js
string.startsWith(substring, position);
```

- The `substring` is the specified characters.
- The `position` is optional. It is used to start searching for `substring`. It starts at 0.

## Example 1

Checking if a string starts with specified characters:

```js
console.log('Do you prefer coffee or tea?'.startsWith('Do'));
// Output: true
```
> Note: The `substring` paramter in `.startsWith` is case sensitive.

```js
console.log('Do you prefer coffee or tea?'.startsWith('do'));
// In the original string, "D" is capitalized. But in the substring parameter, 'd' is in lowercase. Output: false
```

## Example 2

Checking if a string starts with specified characters with a specified position:

```js
console.log('Do you prefer coffee or tea?'.startsWith('coffee', 14));
// Output: true
```


## Codebyte example

```codebyte/javascript
console.log('Does Codecademy begin with a C?'.startsWith('C', 5));
// Output: True

console.log('Does codecademy begin with a c?'.startsWith('C', 5));
// Output: False.

```