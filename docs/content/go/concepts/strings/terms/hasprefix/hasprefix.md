---
Title: 'HasPrefix()'
Description: 'Returns a boolean value indicating whether a given string begins with prefix.'
Subjects:
  - 'Go'
  - 'Web Development'
Tags:
  - 'Strings'
  - 'HasPrefix'
CatalogContent:
  - 'learn-go'
  - 'paths/back-end-engineer-career-path'
---

The **`Hasprefix()`** function returns a boolean value indicating whether a given string begins with prefix. The method returns `true` if the string begins with prefix, `false` otherwise.

## Syntax

```pseudo
strings.HasPrefix(str, prefix string) string
```

Where `str` is the string where we want to check prefix and `prefix string` is prefix to be checked.

> **Note:** The `strings` package must be called to use `HasPrefix()`.

## Example

The following examples demonstrate the use of the `strings.HasPrefix()` function.

```go
  package main

import (
  "fmt"
  "strings"
)

func main() {
  fmt.Println(strings.HasPrefix("Codecademy","Code"))
  fmt.Println(strings.HasPrefix("GitHub","Hub"))
}
```

This example results in the following output:

```shell
true
false
```

## Codebyte Example

The following examples are runnable and use the `strings.HasPrefix` to test whether the given strings have prefix.

```codebyte/golang
package main

import (
  "fmt"
  "strings"
)

func main() {
  fmt.Println(strings.HasPrefix("Codecademy","Code"))
  fmt.Println(strings.HasPrefix("GitHub","Hub"))
}
```
