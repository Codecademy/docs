---
Title: 'HasSuffix()'
Description: 'Checks if a given suffix exists on the specified string. Returns true if the string has the given suffix, else it returns false.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Functions'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`HasSuffix()`** function in Go is used to check if a specified suffix exists on a given string. The function returns `true` if the given string has the specified suffix, otherwise it returns `false`.

## Syntax

```pseudo
strings.HasSuffix(str, suffix)
```

Where `str` is the given string and `suffix` is the ending substring to check for. This function is case-sensitive.

## Example

The following example demonstrates the use of the `strings.HasSuffix()` function.

```go
package main
import (
 "fmt"
 "strings"
)

func main() {
  str := "Codecademy"
  firstSuffix := "demy"
  secondSuffix := "academy"

  fmt.Println(strings.HasSuffix(str, firstSuffix))
  fmt.Println(strings.HasSuffix(str, secondSuffix))
}
```

The output will be:

```shell
true
false
```

## Codebyte Example

The following example is runnable and uses the `strings.HasSuffix()` function to check if the given suffixes are present in the string `Hello World`.

```codebyte/golang
package main

import (
  "fmt"
  "strings"
)

func main() {
  str := "Hello World"
  suffixes := []string{"World", "world", "o World"}

  for index := 0; index < len(suffixes); index++ {
    fmt.Println(strings.HasSuffix(str, suffixes[index]))
  }
}
```
