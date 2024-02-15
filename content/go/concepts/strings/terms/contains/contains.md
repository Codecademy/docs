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
  - 'paths/computer-science'
---

The **`Contains()`** function returns a boolean value indicating whether a given substring is present or not in a given string. The method returns `true` if the substring is present, otherwise it returns `false`.

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

The following example is runnable and uses the `strings.Contains()` function to determine if the given value is present in the string `codecademy`.

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
