---
Title: '.lastIndexOf()' 
Description: 'Searches a string for a specified value, and returns the position of the match.'
Subjects:
  - 'Computer Science'
Tags:
  - 'String'
  - 'Method'
  - 'Characters'
CatalogContent:
  - 'learn-Java'
  - 'paths/computer-science'
---

The **`.lastIndexOf()`** method is a method that searches a string for a specified value, and returns the position of the match. It searches the string from the end to the beginning, and returns the index within the string of the last occurrence of the specified value, or -1 if the value is not found.

## Syntax

```pseudo
lastIndexOf(String searchValue, int fromIndex)
```

- `searchValue`: the character or sequence of characters to search for. 
- `fromIndex`: the index at which to start searching backwards in the string (optional).

## Example

This example below searches the string `sentence` for the value `the` and returns the index of the last occurrence:

```java
let str = 'The quick brown fox jumps over the lazy dog';
let lastPos = str.lastIndexOf('the');
console.log(lastPos); // 31
```
This will output the following:
```shell
31
```
