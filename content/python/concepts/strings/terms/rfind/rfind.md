---
Title: '.rfind()'
Description: 'Finds the last occurrence of a specified substring and returns the starting index.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

**`.rfind()`** searches a given string for a substring starting from index `0`, or alternatively, from the _ith_ index to _jth_ index (where _i < j_). The method returns the starting index of the last occurrence of the substring.

## Syntax

```pseudo
mystr.rfind(value, start, end)
```

This method is called on a string `mystr` and returns the last index where the substring `value` is found by searching the original string `mystr` from the `start` index to the `end` index, and if the substring is not found it returns `-1`.

## Example

In the following example, `.rfind()` is used to search for several substring values in the original string `mystr`.

```python
mystr = "This is a python string"
str1 = "Hello"
str2 = "is"
str3 = "py"
str4 = "str"

print(mystr.rfind(str1))
print(mystr.rfind(str2,2,5))
print(mystr.rfind(str3,0,15))
print(mystr.rfind(str4,10,20))
```

The output of the above code will be:

```shell
-1
2
10
17
```
