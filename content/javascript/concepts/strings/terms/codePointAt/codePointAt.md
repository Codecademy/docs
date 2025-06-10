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