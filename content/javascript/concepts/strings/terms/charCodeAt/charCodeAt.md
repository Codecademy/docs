---
Title: '.charCodeAt()'
Description: 'Returns an integer representing the UTF-16 character code at the specified index in a string.'
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

In JavaScript, the **`.charCodeAt()`** method, used with strings, returns a positive integer representing the UTF-16 code unit of the character at a specified index in the string. This integer represents the Unicode value of the character.

## Syntax

```pseudo
string.charCodeAt(index)
```

- `string:` The string to get the character code from.
- `index`: The position of the character in the string whose UTF-16 code unit is to be retrieved.

## Example

In the following example, a string variable called `sentence` stores a sentence. The `charCodeAt()` method  is used to get the Unicode value of a character in the string, which is then logged to the console.

```js
let sentence = 'A sample sentence for demoing how the method works'
console.log(sentence.charCodeAt(0)) // returns 65 the code for the letter A
```

This results in the following output:

```shell
65
```

## Codebyte Example

```codebyte/javascript
let myStr = 'An example string to show how this works'
console.log(myStr.charCodeAt(5));
```
