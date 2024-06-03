---
Title: '.charCodeAt()'
Description: 'Returns an integer representing the UTF-16 character code at the specified index'
Subjects:
  - 'Web Development'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent: 
  - 'paths/front-end-engineer-career-path'
---

The **charCodeAt()** method used with javascript strings returns an positive integer representing UTF-16 character code at the given index.

## Syntax

```pseudo
sentence.charCodeAt()
```

The `.charCodeAt()` method returns a positive integer for the provided variable `sentence`.

## Example

In the example below, the variable `sentence` stores a string variable to check the `charCodeAt()` method against and logs the result to the console.

```js
let sentence = 'A sample sentence for demoing how the method works'
console.log(sentence.charCodeAt(0)) // returns 65 the code for the letter A
```

This results in the following output:

```shell
65
```
