---
Title: '.reverse()'
Description: 'Returns a provided string in reverse order.'
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

The **`.reverse()`** function takes a valid string and rearranges it in reverse order.

## Syntax

```lua
string.reverse(originalString)
```

The `originalString` is the string to be reversed.

## Example

The code below demonstrates a basic implementation of the `.reverse()` method:

```lua
originalString = "Hello, World!"
newString = string.reverse(originalString)

print(newString)
```

This will return the following output:

```shell
!dlroW ,olleH
```
