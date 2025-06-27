---
Title: '.fromCodePoint()'
Description: 'Returns a string created by using the specified sequence of Unicode code points.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'JavaScript'
  - 'Methods'
  - 'Strings'
  - 'Unicode'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.fromCodePoint()`** method returns a string created by using the specified sequence of Unicode code points. It allows for the creation of characters from their Unicode values, including characters beyond the Basic Multilingual Plane (code points greater than `0xFFFF`).

This method is commonly used when working with emojis, special symbols, or multilingual characters in applications that require precise Unicode handling—such as custom font rendering, text processing, or internationalization.

## Syntax

```pseudo
String.fromCodePoint(num1, ..., numN)
```

**Parameters:**

- **num1, ..., numN**: One or more code points.

**Return value**:

A string formed by the given Unicode code point(s).

> **Note:** If multiple code points are passed, the resulting string will be a concatenation of their corresponding characters.

## Example

In this example, multiple Unicode code points are used to create a string containing symbols and a rare character:

```js
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804));
```

The output of the code is:

```shell
☃★♲你
```

This returns a string combining the snowman (`☃`), star (`★`), recycling symbol (`♲`), and a rare CJK character (`你`).

## Codebyte

In this example, `.fromCodePoint()` is used to generate both a single emoji and a string of multiple emojis:

```codebyte/javascript
const greeting = String.fromCodePoint(128075);
console.log(greeting);

const emojis = String.fromCodePoint(128514, 128513, 128523);
console.log(emojis);
```

This example shows how fromCodePoint() can be used to generate one or more emojis by specifying their Unicode code points.
