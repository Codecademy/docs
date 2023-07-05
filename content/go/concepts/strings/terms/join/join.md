---
Title: 'Join Function in Go'
Description: 'Understanding the join function'
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

> **Note:** The `strings` package includes a built-in function called the **join**. A given separator is used to concatenate the elements of a slice of strings into a single string.

## Syntax

'a': is the segment of strings you want to join.
"sep": is used as a separator between the elements in the final string.

The function outputs a single string that is the concatenation of the strings in slice 'a' that are separated by the separator'sep'.

The 'join' function has the following syntax:

```pseudo
strings.Join(a []string, sep string) string
```

## Example

In the example below, "Hello" and "World" are the two elements in a slice of strings. These strings are joined together using the 'join' function, with each element being separated by a comma and a space.

Here is an illustration of how to use Go's join function:

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

Three elements are present in this slice of strings: "Go," "is," and "awesome!" These strings are concatenated into a single string with the elements separated by spaces using the join function.

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
