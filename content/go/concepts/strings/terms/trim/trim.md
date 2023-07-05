---
Title: 'Trim()'
Description: 'Removes leading and trailing specified characters from a string.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Functions'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`Trim()`** function removes leading and trailing specified characters from a string. The `strings` library must be imported in order to use this function.

## Syntax

```pseudo
trimmed := strings.Trim(str, cutset)
```

Where `str` is the input string from which the leading and trailing characters are to be removed, `cutset` is a string containing the characters to be removed, and `trimmed` is the resulting string after trimming.

## Example

The following removes leading and trailing whitespace characters from a string and prints the result:

```go
package main

import (
  "fmt"
  "strings"
)

func main() {
  str := "   Hello, World!   "
  trimmed := strings.Trim(str, " ")
  fmt.Println(trimmed)
}
```

The output will be:

```shell
Hello, World!
```

## Codebyte Example

The following runnable example shows the usage of the `Trim()` function to remove specific characters from a string:

```codebyte/golang
package main

import (
  "fmt"
  "strings"
)

func main() {
  fmt.Print(strings.Trim("¡¡¡Hello, Gophers!!!", "!¡"))
}
```
