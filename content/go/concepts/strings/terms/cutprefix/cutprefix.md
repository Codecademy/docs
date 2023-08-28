---
Title: 'CutPrefix()'
Description: 'Returns a given string with the specified prefix removed and a boolean value confirming if the prefix was present.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Functions'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`CutPrefix()`** function in Go is used to return a specified string without a given prefix. The function returns the specified string without the given prefix and boolean value that confirms the presence of the prefix. It returns`true` if the given string has the specified prefix, otherwise it returns the full string and `false`. If the given prefix is an empty string, the function returns the full string and `true`.

## Syntax

```pseudo
strings.CutPrefix(str, prefix)
```

Where `str` is the given string and `prefix` is the prefix to remove.

## Example

The following example demonstrates the use of the `strings.CutPrefix()` function.

```go
package main
import (
 "fmt"
 "strings"
)

func main() {
  str := "Codecademy"
  firstPrefix := "Code"
  secondPrefix := "Hello"
  thirdPrefix := ""

  fmt.Println(strings.CutPrefix(str, firstPrefix))
  fmt.Println(strings.CutPrefix(str, secondPrefix))
  fmt.Println(strings.CutPrefix(str, thirdPrefix))
}
```

The output will be:

```shell
cademy true
Codecademy false
Codecademy true
```

## Codebyte Example

The following example is runnable and uses the `strings.CutPrefix()` function to remove the given prefix `auto` is if it is present in the strings `autopilot`, `biography` and `auto`. It then provides an empty string as the prefix to remove.

```codebyte/golang
package main

import (
  "fmt"
  "strings"
)

func main() {
  strs := []string{"autopilot", "biography", "auto"}
  prefix := "auto"

  fmt.Println("Removing prefix 'auto' from 'autopilot', 'biography and 'auto'")
  for index := 0; index < len(strs); index++ {
    fmt.Println(strings.CutPrefix(strs[index], prefix))
  }

  fmt.Println("\nThe provided prefix is an empty string '' to be removed from 'Hello'")
  fmt.Println(strings.CutPrefix("Hello", ""))
}
```
