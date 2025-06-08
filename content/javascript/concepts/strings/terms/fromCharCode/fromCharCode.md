---
Title: 'fromCharCode'
Description: 'Its a static method that returns a string created from the specified sequence of UTF-16 code units.'
Subjects:
  - 'Web Development'
Tags:
  - 'Strings'
  - 'Characters'
  - 'JavaScript'
  - 'Methods'
CatalogContent:
  - 'paths/front-end-engineer-career-path'
---

JavaScript has three static methods for working with String Objects, one of these is **fromCharCode**, which allows you to obtain a string from a sequence of UTF-16 code units.

## Syntax

```javascript
String.fromCharCode();
String.fromCharCode(num1);
String.fromCharCode(num1, num2);
String.fromCharCode(num1, num2, /* …, */ numN);
```

### Parameters

At least one number between 0 and 65535 (0xFFFF) **representing a UTF-16 code unit**. Numbers greater than 0xFFFF are truncated to the last 16 bits.

## Example

```javascript
const nombre = String.fromCharCode(76, 105, 97, 110, 121, 10084, 65039);
console.log(nombre); // "Liany❤️"
```

## Codebyte Example

```codebyte/js
# Example runnable code block.
const secret = String.fromCharCode(
  76, 111, 110, 103, 32, 108, 105, 118, 101, 32, 116, 104, 101, 32, 107, 105, 116, 116, 105, 101, 115
);
console.log(secret); // "Long live the kitties"

```
