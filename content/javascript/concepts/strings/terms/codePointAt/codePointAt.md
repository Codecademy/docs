---
Title: '.codePointAt()'
Description: 'Returns the Unicode code point value at a specified index position in a string, including complex characters like emojis and symbols.'
Subjects: 
  - 'Computer Science'
  - 'Web Development'
  - 'JavaScript Built-ins'
  - 'Unicode/Character Encoding'
Tags:
  - 'Unicode'
  - 'UTF-16'
  - 'String Manipulation'
  - 'Methods'
  - 'Text Processing'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-developer'
 ---

The **`.codePointAt()`** [method](https://www.codecademy.com/resources/docs/javascript/methods) is a JavaScript string method that returns a non-negative integer that is the Unicode code point value of the character at a specified index position. Unlike the older method [`.charCodeAt()`](https://www.codecademy.com/resources/docs/javascript/concepts/strings/charCodeAt/charCodeAt.md), it properly handles the full spectrum of Unicode characters, including emojis, symbols, and characters from any language.

## Syntax

```js
string.codePointAt(index);
```
- `string`: The string value from which the character is to be accessed.

**Parameters:**
- `index`: The zero-based index position of the character whose code point to be retrieved.

**Returns:**
- A number representing the Unicode code point of the character at the specified position, or `undefined` if no character exists at the given position.

## Example

Below is an example showcasing the functionality of the `.codePointAt()` method:

```js
const text = "Hello 😀";

// Accessing the second character in the string.
console.log(text.codePointAt(1)); // 101 (code for 'e')

// Accessing the emoji
console.log(text.codePointAt(6)); // 128512 (code for 😀)

// Accessing a character at a position that is beyond the string length.
console.log(text.codePointAt(12)); // undefined

// Compare with a multi-byte character
const emoji = "👨‍💻"; // Man technologist emoji (compound emoji)
console.log(emoji.codePointAt(0)); // 128104 (👨)
console.log(emoji.codePointAt(1)); // 8205 (zero-width joiner)
```