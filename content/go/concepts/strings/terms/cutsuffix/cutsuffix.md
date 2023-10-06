---
Title: 'CutSuffix()'
Description: 'Returns a given string with the specified suffix removed and a boolean value confirming if the suffix was present.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Functions'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`CutSuffix()`** function in Go is used to return a specified string without a given suffix. The function returns the specified string without the given suffix and a boolean value confirming the presence of the suffix. It returns `true` if the given string has the specified suffix, otherwise it returns the full string and `false`. If the given suffix is an empty string, the function returns the full string and `true`.

## Syntax

```pseudo
strings.CutSuffix(str, suffix)
```

Where `str` is the given string and `suffix` is the suffix to remove.

## Example

The following example demonstrates the use of the `strings.CutSuffix()` function.

```go
package main
import (
 "fmt"
 "strings"
)

func main() {
  str := "Hello Codecademy"
  suffix1 := "ademy"
  suffix2 := "llo"
  suffix3 := ""

  fmt.Println(strings.CutSuffix(str, suffix1))
  fmt.Println(strings.CutSuffix(str, suffix2))
  fmt.Println(strings.CutSuffix(str, suffix3))
}
```

The output will be:

```shell
Hello Code true
Hello Codecademy false
Hello Codecademy false
```
