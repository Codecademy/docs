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

## Example

The following example demonstrates the usage of the `.len()` method:

```lua
hello = "hello"
nihao = "你好"
hello_len = string.len(hello)
nihao_len = string.len(nihao)
nihao_utf8len = utf8.len(nihao)
print(hello_len)
print(nihao_len)
print(nihao_utf8len)
```

The above code produces the following output:

```shell
5
6
2
```
