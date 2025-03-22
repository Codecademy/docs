---
Title: '.len()'
Description: 'Returns the total number of characters present in a specified string.'
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

The **`.len()`** method returns the total number of characters present in a specified string.

## Syntax

```pseudo
string.len(s)
```

- `s`: The input string whose length is to be determined.

> Note: Calling `string.len()` without any arguments will result in an error.

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
