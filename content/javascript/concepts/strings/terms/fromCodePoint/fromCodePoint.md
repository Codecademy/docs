---
Title: 'String.fromCodePoint()'
Description: 'Returns a string created by using the specified sequence of Unicode code points.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Unicode'
  - 'Methods'
  - 'JavaScript'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

# String.fromCodePoint()

The `String.fromCodePoint()` method returns a string created by using the specified sequence of Unicode code points. It allows for the creation of characters from their Unicode values, including characters beyond the Basic Multilingual Plane (code points greater than 0xFFFF).

## Syntax

```javascript
String.fromCodePoint(num1, ..., numN)
```

- **num1, ..., numN**: One or more code points.
- **Returns**: A string created from the specified code points.

## Example

```javascript
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804));
// Output: ☃★♲你
```

## Codebyte

```codebyte/javascript
const greeting = String.fromCodePoint(128075);
console.log(greeting); // 👋

const emojis = String.fromCodePoint(128514, 128513, 128523);
console.log(emojis); // 😂😁😋
```
