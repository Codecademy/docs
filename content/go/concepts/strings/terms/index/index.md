---
Title: 'Index()'
Description: 'Returns the index value of the first occurrence of a substring in the original string.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Functions'
  - 'Characters'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`Index()`** function returns the index value of the first occurrence of a substring in the original string, otherwise it returns `-1` if the substring is not present in the original string.

## Syntax

```pseudo
strings.Index(str, sub_str)
```

Where `str` is the original string and `sub_str` is the substring to find the first occurrence in the original string.

## Example

The following example demonstrates the use of the `strings.Index()` function:

```go
package main
import (
  "fmt"
  "strings"
)
func main() {
  fmt.Println(strings.Index("chandler","and"))
  fmt.Println(strings.Index("navy","as"))
}
```

The output will be:

```shell
2
-1
```
