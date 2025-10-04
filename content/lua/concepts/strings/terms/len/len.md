---
Title: '.len()'
Description: 'Returns the length of a string, measured in bytes.'
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

The **`.len()`** method returns the length of a string, measured in bytes. It is equivalent to using the length operator (`#`).

## Syntax

```pseudo
string.len(s)
```

- `s`: The input string whose length is to be determined.

> **Note:** Calling `.len()` without any arguments will result in an error.

## Example

The following example demonstrates the usage of the `.len()` method:

```lua
hello = "hello"
hello_len = string.len(hello)
print(hello_len)
```

The above code produces the following output:

```shell
5
```
