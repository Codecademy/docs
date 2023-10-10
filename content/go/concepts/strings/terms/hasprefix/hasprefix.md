---
Title: 'HasPrefix()'
Description: 'Returns a boolean value indicating whether a given string begins with a given prefix.'
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

The **`HasPrefix()`** function returns a boolean value indicating whether a given string begins with a given prefix. The method returns `true` if the string begins with the prefix, otherwise it returns `false`.

## Syntax

```pseudo
strings.HasPrefix(str, prefix)
```

Where `str` is the string where we want to check the prefix and `prefix` is the prefix to be checked.

## Example

The following code demonstrate the use of the `strings.HasPrefix()` function.

```go
package main
import (
  "fmt"
  "strings"
)

func main() {
  fmt.Println(strings.HasPrefix("codecademy","code"))
  fmt.Println(strings.HasPrefix("GitHub","Hub"))
}
```

The output will be:

```shell
true
false
```

## Codebyte Example

The following example is runnable and uses the `strings.HasPrefix()` function to determine if `codecademy` begins with `code`.

```codebyte/golang
package main
import (
  "fmt"
  "strings"
)
func main() {
  str := "codecademy"
  sub_str := "code"
  fmt.Println(strings.HasPrefix(str,sub_str))
}
```
