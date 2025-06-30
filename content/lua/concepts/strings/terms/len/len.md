---
Title: '.len()'
Description: 'Returns the total number of bytes present in a specified string.'
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

The **`.len()`** method returns the number of bytes in a string. It is identical to the `#` operator.

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
