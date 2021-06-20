---
Title: ".startsWith()"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Strings"
  - "Methods"
Catalog Content:
  - "https://www.codecademy.com/learn/introduction-to-javascript"
  - "https://www.codecademy.com/learn/paths/web-development"
---

## Definition

To check whether a string begins with the specified characters. It will only return a boolean value, either `true` or `false`.

## Syntax

The `searchString` is to specify characters.

```js
string.startsWith(searchString);
```

The `position` is optional. It is use to start searching for `searchString`. It starts at 0.

```js
string.startsWith(searchString, position);
```

## Example 1

Checking if a string starts with a specified characters:

```js
console.log("Do you prefer coffee or tea?".startsWith("Do"));
// Output: true
```

## Example 2

Checking if a string starts with a specified characters with a specified position:

```js
console.log("Do you prefer coffee or tea?".startsWith("coffee", 14));
// Output: true
```
