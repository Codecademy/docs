---
Title: 'Map()'
Description: 'Returns a copy of a provided string with its characters modified according to a given mapping function.'
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

The **`strings.Map()`** method changes the characters of a provided string according to a given mapping function. It returns a modified copy of the original string.

## Syntax

```pseudo
strings.Map(mappingFunc(r), s)
```

The `strings.Map()` function takes two parameters:

- `mappingFunc(r)`: A function and a character (type [rune](https://www.codecademy.com/resources/docs/go/data-types)) that the original character will be replaced with.
- `s`: The given string in which the characters will be replaced.

> **Note:** If a negative value is returned when a character is mapped, it is dropped from the string without a replacement.

## Example

The following example shows the implementation of `strings.Map()`:

```go
package main

import (
  "fmt"
  "strings"
)

func main() {
  mapped := func(r rune) rune {
    if r == 'e' {
      return '3'
    }
    return r
  }

  input := "Halloween"

  result := strings.Map(mapped, input)
  fmt.Println(result)
}
```

This example results in the following output:

```shell
Hallow33n
```

## Codebyte Example

The following example can be run and uses the `strings.Map()` function to replace the character `"a"` with `"@"`.

```codebyte/golang
package main

import (
  "fmt"
  "strings"
)

func main() {
  mapped := func(r rune) rune {
    if r == 'a' {
      return '@'
    }
    return r
  }

  input := "Carry you always"

  result := strings.Map(mapped, input)
  fmt.Println(result)
}
```
