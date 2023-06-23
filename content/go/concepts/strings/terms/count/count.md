---
Title: 'Count()'
Description: 'Returns the number of times a substring occurs in a given string.'
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

The **`Count()`** function returns the number of times a given substring appears in a given string without overlapping.

## Syntax

```pseudo
strings.Count(str, sub)
```

Where `str` is the string being searched. `sub`, on the other hand, is the substring being searched for. It returns an `int` as the number of non-overlapping occurrences of `sub` in `str`. When `sub` is an empty string, `Count()` will count the boundaries before and after each character in `str`. (i.e. When `str` is "A" and `sub` is "", `Count()` returns 2. When `str` is "ABC" and `sub` is "", then `Count()` returns 4.)

## Example

The following example searches for the letter "e" in "Codecademy" and prints out the result.

```go
package main
import (
  "fmt"
  "strings"
)
func main() {
  name := "Codecademy"
  find := "e"
  fmt.Println(find, "is in", name, strings.Count(name,find), "times")
}
```

This results in the following output:

```shell
e is in Codecademy 2 times
```

## Codebyte Example

The following example shows how `Count()` only counts non-overlapping substrings.

```codebyte/golang
package main
import (
  "fmt"
  "strings"
)
func main() {
  str := "AABBABBBAAAABBBB"
  find := "BB"
  fmt.Println("Found", find, strings.Count(str,find), "times.")
}
```
