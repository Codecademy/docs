---
Title: 'LastIndex()'
Description: 'Returns the index value of the last occurrence of a substring in the original string.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Functions'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`LastIndex()`** function returns the index value of the last occurrence of a substring in the original string. Otherwise, it returns `-1` if the substring is not present in the original string.

## Syntax

```pseudo
strings.LastIndex(str, substr)
```

Where `str` is the original string and `substr` is the substring to find in the original string.

## Example

The following example demonstrates the use of the `strings.LastIndex()` function:

```go
package main

import (
  "fmt"
  "strings"
)

func main() {
  fmt.Println(strings.LastIndex("flibbertigibbet ", "bbe"))
}
```

The output will be:

```shell
11
```

## Codebyte Example

The provided example is executable and implements the `strings.LastIndex()` function.

```codebyte/golang
package main

import (
  "fmt"
  "strings"
)

func main() {
  str := "Monday Tuesday Wednesday"
  substr1 := "day"
  substr2 := "TUESDAY"
  fmt.Print(strings.LastIndex(str, substr1))
  fmt.Print("\n", strings.LastIndex(str, substr2))
}
```
