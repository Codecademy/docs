---
Title: 'Join()'
Description: 'Returns the concatenated elements of a string slice into a single string.'
Subjects:
  - 'Go'
  - 'Web Development'
Tags:
  - 'Strings'
  - 'Join'
CatalogContent:
  - 'learn-go'
  - 'paths/back-end-engineer-career-path'
---

The **`Join()`** function takes a given separator to concatenate the elements of a slice of strings into a single string.

## Syntax

```pseudo
strings.Join(a []string, sep string) string
```

`a`: The segments of strings to be joined.
`sep`: The separator between the elements in the final string.

The function outputs a single string that is the concatenation of the strings in slice `a` that are separated by the separator `sep`.

> **Note:** The `strings` package must be called to use `Join()`.

## Example

In the example below, `"Hello"` and `"World"` are combined into one string with the `Join()` function.

```go
  package main

import (
  "fmt"
  "strings"
)

func main() {
  strs := []string{"Hello", "World"}
  result := strings.Join(strs, ", ")
  fmt.Println(result)
}
```

This example results in the following output:

```shell
Hello, World
```

## Codebyte Example

In the code below, several strings are concatenated into a single string, separated by spaces, using the `Join()` function.

```codebyte/golang
package main

import (
  "fmt"
  "strings"
)

func main() {
  strs := []string{"Go", "is", "awesome!"}
  result := strings.Join(strs, " ")
  fmt.Println(result)
}
```
