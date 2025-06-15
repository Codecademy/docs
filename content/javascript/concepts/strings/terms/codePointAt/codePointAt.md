---
Title: '.codePointAt()'
Description: 'Returns the Unicode code point value at a specified index position in a string, including complex characters like emojis and symbols.'
Subjects: 
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Strings'
  - 'Text Processing'
  - 'Unicode'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-developer'
---

The **`.codePointAt()`** [method](https://www.codecademy.com/resources/docs/javascript/methods) is a JavaScript string method that returns a non-negative integer representing the Unicode code point of the character at a specified index. Unlike the older [`.charCodeAt()`](https://www.codecademy.com/resources/docs/javascript/concepts/strings/charCodeAt/charCodeAt.md) method, `.codePointAt()` accurately handles the full range of Unicode characters, including emojis, symbols, and characters from any language.

## Syntax

```pseudo
string.codePointAt(index);
```

**Parameters:**

- `index`: A non-negative integer representing the position in the string to get the code point from. If the index is out of range, it returns `undefined`.

**Return value:**

- A non-negative integer representing the Unicode code point at the specified index.
- `undefined` if no character exists at that index.

## Example

The following example demonstrates how `.codePointAt()` retrieves Unicode values from strings, including regular characters, emojis, compound emojis, and out-of-range positions:

```js
const text = "Hello 😀";

// Accessing the second character in the string.
console.log(text.codePointAt(1));

// Accessing the emoji
console.log(text.codePointAt(6));

// Accessing a character at a position that is beyond the string length.
console.log(text.codePointAt(12));

// Compare with a multi-byte character
const emoji = "👨‍💻"; // Man technologist emoji (compound emoji)
console.log(emoji.codePointAt(0));
console.log(emoji.codePointAt(2));
```

The output of this code is:

```shell
101
128512
undefined
128104
8205
```

## Codebyte Example

The example retrieves Unicode code points from a string containing text and emojis, handling multi-byte characters and out-of-range positions correctly:

```codebyte/javascript
const greeting = "Hi 🌍🚀!";

// Access Earth emoji
console.log(greeting.codePointAt(3));

// Access Rocket emoji
console.log(greeting.codePointAt(5));

// Try accessing beyond the string length
console.log(greeting.codePointAt(20));
```
