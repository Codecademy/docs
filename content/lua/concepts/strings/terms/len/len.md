---
Title: '.len()'
Description: 'Returns the number of characters that exist in a specific string.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Numbers'
  - 'Functions'
  - 'Strings'
  - 'Characters'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

The **`.len()`** method returns the number of characters that exist in a specific string.

## Syntax

```pseudo
string.len(s)
```

- `s`: The string to be checked.

> Note: If an empty string is inserted, the method returns `0`.

## Example

The following example demonstrates the usage of the `.len()` method:

```lua
town = "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch"
lenExample = string.len(town)
print(lenExample)
```

The above code produces the following output:

```shell
58
```
