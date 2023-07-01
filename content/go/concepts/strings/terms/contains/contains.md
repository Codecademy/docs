---
Title: 'Contains()'
Description: 'Returns a boolean value indicating whether a given substring is present or not in a given string.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Functions'
  - 'Characters'
CatalogContent:
  - 'learn-go'
  - 'path/computer-science'
---

The **`Contains()`** function returns a boolean value indicating whether a given substring is present or not in a given string. If given substring is present in the given string then it returns true, else it returns false.

## Syntax

```pseudo
strings.Contains(str, sub_str)
```

Where `str` is the original string and `sub_str` is the substring to check against the original string.

## Example

The following example demonstrates the use of the `strings.Contains()` function.

```go
package main
import (
  "fmt"
  "strings"
)
func main() {
  fmt.Println(strings.Contains("folder","old"))
  fmt.Println(strings.Contains("folder","code"))
}
```

The output will be:

```shell
true
false
```

## Codebyte Example

The following example is runnable and uses the `strings.Contains()` function to return a boolean value indicating whether a given substring is present or not in a given string.

```codebyte/golang
package main
import (
  "fmt"
  "strings"
)
func main() {
  str := "codecademy"
  sub_str := "my"
  fmt.Println(strings.Contains(str,sub_str))
}
```
