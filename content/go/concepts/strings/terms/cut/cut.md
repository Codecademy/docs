---
Title: 'Cut()'
Description: 'Slices a string around a separator.'
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

The **`Cut()`** function slices a string around a separator. The `strings` library must be imported in order to use this function.

## Syntax

```pseudo
before, after, found := strings.Cut(s, sep)
```

Where `before` is the part of the string before the separator, `after` is the part of the string after the separator, and `found` is a boolean indicating whether the separator was found in the string.

## Example

The following example removes the substring `world` from the original string `Hello, world!` and prints out the result:

```go
package main

import (
  "fmt"
  "strings"
)

func main() {
  s := "Hello, world!"
  sep := ","
  before, after, found := strings.Cut(s, sep)
  fmt.Printf("Cut(%q, %q) = %q, %q, %v\n", s, sep, before, after, found)
}
```

The output will be:

```shell
Cut("Hello, world!", ",") = "Hello", " world!", true
```
