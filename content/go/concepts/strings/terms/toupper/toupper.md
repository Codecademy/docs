---
Title: 'ToUpper()'
Description: 'Returns a string in all uppercase.'
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

The **`ToUpper()`** function is used to convert lowercase characters to uppercase in a given string.

## Syntax

```pseudo
result = strings.ToUpper(str)
```

The function accepts the given string, `str`, as its argument and returns the final string, `result`, converting lowercase characters to uppercase.

> **Note:** This function only works with the standard characters of the alphabet.

## Example

In the example below, `"Codecademy"` is converted to all uppercase.

```go
package main
import (
   "fmt"
   "strings"
)

func main() {
   var input string = "Codecademy"
   var output string = strings.ToUpper(input)
   fmt.Println(output)
}
```

This example results in the following output:

```shell
CODECADEMY
```

## Codebyte Example

In the code below, a sentence in both lowercase and uppercase is converted into just uppercase using the `ToUpper()` function.

```codebyte/golang
package main

import (
    "fmt"
    "strings"
)

// Main method
func main() {

    str1 := "This is a Codecademy Tutorial"

    res1 := strings.ToUpper(str1)

    fmt.Println(res1)
```
