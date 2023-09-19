---
Title: 'Compare()'
Description: 'Compares two strings in lexicographical order.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Functions'
  - 'Characters'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`strings.Compare()`** function is a built-in function in Golang that compares two strings lexicographically. It returns an integer value that indicates the relationship between the two strings.

## Syntax

```pseudo
strings.Compare(str1, str2)
```

Where `str1` and `str2` are the two strings to be compared:

- If the two strings are equal, the function returns `0`.
- If the first string is lexicographically less than the second string, the function returns a `negative` value.
- If the first string is lexicographically greater than the second string, the function returns a `positive` value.

## Example

The following example demonstrates the use of the `strings.Compare()` function.

```go
package main

import (
  "fmt"
  "strings"
)

func main() {
  greater := strings.Compare("Z", "A")
  equal := strings.Compare("W", "W")
  lesser := strings.Compare("A", "Z")

  fmt.Println(greater)
  fmt.Println(equal)
  fmt.Println(lesser)
}
```

The output will be:

```shell
1
0
-1
```

## Codebyte Example

The following example is runnable and uses the `strings.Compare()` function to compare two strings and determine their relative ordering.

```codebyte/golang
package main

import (
  "fmt"
  "strings"
)

func main() {
  firstString := "Hello"
  secondString := "World"
  thirdString := "Hello World"

  result1 := strings.Compare(firstString, secondString)
  result2 := strings.Compare(firstString, thirdString)
  result3 := strings.Compare(secondString, thirdString)

  fmt.Println("The result of comparing 'Hello' and 'World' is:", result1)
  fmt.Println("The result of comparing 'Hello' and 'Hello World' is:", result2)
  fmt.Println("The result of comparing 'World' and 'Hello World' is:", result3)
}
```
