---
Title: '.rfind()'
Description: 'Finds the starting index of the last occurrence of a specified substring if it is found in an original string and if the substring is not present the method returns -1.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'String'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

**`.rfind()`** searches an entire string from the `0th` index to the `last` index or searches a part of the string from the `ith` index to `jth` index, where `i < j` and returns the `last` index where the substring is found at else it returns `-1` indicating the substring is not found.

## Syntax

```pseudo
mystr.rfind(value, start, end)
```

This method is called on a string `mystr` and returns the last index where the substring `value` is found at by searching the original string `mystr` from the `start` index to the `end` index and if the substring is not found it retuns `-1`.

## Example

In the following example, `.rfind()` is used to find out if the substring values are found in the original string `mystr`.

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
