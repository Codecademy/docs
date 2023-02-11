---
Title: '.lastIndexOf()' 
Description: 'Searches a string for a specified value, and returns the position of the match.'
Subjects:
  - 'Computer Science'
Tags:
  - 'String'
  - 'Method'
CatalogContent:
  - 'learn-Java'
  - 'paths/computer-science'
---

The **`.lastIndexOf`** method is a string method in Java which searches a string for a specified value, and returns the position of the match. It searches the string from the end to the beginning, and returns the index within the string of the last occurrence of the specified value, or -1 if the value is not found.

## Syntax

```pseudo
int lastIndexOf(String str, int fromIndex)
```

- `searchValue` parameter is required and is the value to search for. 
- `fromIndex` parameter is optional and is the index at which to start searching backwards in the string.

## Example

This example searches the string `str` for the value `the` and returns the index of the last occurrence of `the`:

```java
let str = 'The quick brown fox jumps over the lazy dog';
let lastPos = str.lastIndexOf('the');
console.log(lastPos); // 31
```
This outputes the following:
```java
31
```
