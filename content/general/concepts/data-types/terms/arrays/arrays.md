---
Title: 'Arrays'
Description: 'The Array data type.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Data Types'
  - 'Types'
CatalogContent:
  - 'paths/code-foundations'
  - 'paths/computer-science'
---

Arrays (or lists, depending on the language) are collections of values. Their values are zero-indexed (they start at 0, then 1, and so on) and are usually accessed at a specified index. Nested arrays (arrays within arrays) are also possible.

```javascript
someArray = ["codecademy", true, 5, ["CC docs", 500, false]]

console.log(someArray) // outputs ["codecademy", true, 5, ["CC docs", 500, false]]
console.log(someArray[0}) // outputs codecademy
console.log(someArray[3]) // outputs ["CC docs", 500, false]
console.log(someArray[3][2]) //outputs false
```
