---
Title: 'Fields()'
Description: 'Splits a string into substrings based on whitespace and returns a slice of the substrings.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Functions'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`Fields()`** function in Go is used to split a string into substrings based on whitespace and return a slice of the substrings. It removes any leading or trailing whitespace and treats consecutive whitespace characters as a single separator.

## Syntax

```pseudo
strings.Fields(str)
```

Where `str` is the original string.

## Example

The following example demonstrates the use of the `strings.Fields()` function.

```go
package main
import (
 "fmt"
 "strings"
)

func main() {
  str := "Hello World Golang"
  fields := strings.Fields(str)

  fmt.Println(fields)
}
```

The output will be:

```shell
[Hello World Golang]
```

## Codebyte Example

The following example is runnable and uses the `strings.Fields()` function to split the string `str`. Then, each substring is printed with its respective index.

```codebyte/golang
package main

import (
  "fmt"
  "strings"
)

func main() {
  str := "I love programming with Go!"
  fields := strings.Fields(str)
  for i, field := range fields {
    fmt.Println("Index: ", i)
    fmt.Println("Value: ", field)
    fmt.Println()
 }
}
```
