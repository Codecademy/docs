---
Title: '.padEnd()'
Description: 'Pads a string with a given string until the resulting string reaches the specified length.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Strings'
CatalogContent: 
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In JavaScript, the **`.padEnd()`** method is used with JavaScript strings to pad the end of a string with another string, until it reaches a specified length. It was introduced with ECMAScript 2017.

## Syntax

```pseudo
string.padEnd(targetLength, padString)
```

- `string`: The original string to be padded.
- `targetLength`: The desired length of the resulting string after padding.
- `padString`: The string to pad the original string with, defaulting to a space if not provided.

## Example

In the following example, a string variable called `text` contains the sentence 'hello world'. The `.padEnd()` method is used to append more characters (in this example exclamation marks) to the end of the text, until it reaches the specified length of 15 characters.

```js
let text = 'hello world'
console.log(text.padEnd(15, '!'))
```

This results in the following output:

```shell
'hello world!!!!'
```

## Codebyte Example

```codebyte/javascript
let myStr = 'This is a testing string'
console.log(myStr.padEnd(30, 'x'));
```
