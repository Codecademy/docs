---
Title: '.sub()'
Description: 'Extracts a substring from a given string.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Strings'
  - 'Functions'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

The **`.sub()`** function is used to extract a substring from a given string. The extracted substring is determined by the integers passed to the function, which specify the starting and ending index.

## Syntax

```pseudo
string.sub(originalString, startIndex, endIndex)
```

- `originalString`: The string from which the substring will be extracted.
- `startIndex`: The index at which the substring should start (inclusive).
- `endIndex` (optional): The index at which the substring should end (exclusive). If `endIndex` is not provided, the substring will extend to the end of the original string.

## Example

Here are some examples of how to use `string.sub()` :

```lua
local originalString = "Hello, World!"
local subString1 = string.sub(originalString, 1, 5)
local subString2 = string.sub(originalString, 8)

print(subString1)
print(subString2)
```

This will return the following output:

```shell
Hello
World!
```
