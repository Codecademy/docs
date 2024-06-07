---
Title: '.padEnd()'
Description: 'Pads a string with a given string several times until the resulting string reaches the specified length.'
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

In JavaScript, the **`padEnd()`** method is used with javascript strings to pad the end of a string with another string, until it reaches a specified length. It was introduced with ECMAScript 2017.

## Syntax

```pseudo
string.padEnd(targetLength, padString)
```

The string is a given variable containing a sentence, the `targetLength` parameter is the number of character the string needs to reach. `padString` is the string character to add to the given string until it reaches the desired length. >**Note** if you wish to use this method with a number, you must convert to a string.

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
