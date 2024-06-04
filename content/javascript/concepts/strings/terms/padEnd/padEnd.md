---
Title: '.padEnd()'
Description: 'Pads a string with a given string several times until it reaches the given length.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent: 
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In JavaScript, the **padEnd()** method is used with javascript strings to pad the end of a string with another string, until it reaches a specified length. It was introduced with ECMAScript 2017.

## Syntax

```pseudo
string.padEnd(length, padStr)
```

The string is a given variable containing a sentence, the length parameter is the value the string needs to reach and padStr is the string character to add to the given string until it reaches the desired length. Note if you wish to use this method with a nukber, you will need to convert to a string first.

## Example

In the following example, a string variable called `text` contains a sentence. The `padEnd()` method is used to pad the text out to the length provided.

```js
let text = 'hello world'
text.padEnd('15', '!')
```

This results in the following output:

```shell
'hello world!!!!'
```

## Codebyte Example

```codebyte/js
# Example runnable code block.
let myStr = 'This is a testing string'
console.log(myStr.padEnd(30, '!'));
```
