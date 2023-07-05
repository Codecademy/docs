---
Title: 'Join()'
Description: 'Returns concatenate elements of a string slice into a single string'
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

> **Note:** The **`Join()`** function takes a given separator to concatenate the elements of a slice of strings into a single string. The `strings` package must be called to use `Join()`.

## Syntax

'a': The segments of strings to be joined.
'sep': The separator between the elements in the final string.

The function outputs a single string that is the concatenation of the strings in slice `a` that are separated by the separator `sep`.

```pseudo
strings.Join(a []string, sep string) string
```

## Example

In the example below, "Hello" and "World" are the two elements in a slice of strings. These strings are joined together using the 'join' function, with each element being separated by a comma and a space.

Below is a basic implementation of the `Join()` function:

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

## Codebyte

In the code below strings are concatenated into a single string, with the elements separated by spaces, using the `Join()` function.

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
