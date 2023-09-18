---
Title: 'Map()'
Description: 'Returns a copy of the provided string with its characters converted according to the mapping function.'
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

The **`strings.Map()`** method changes all of the characters of a given string accordant to the changes specified in the mapping function.

## Syntax

```pseudo
func Map(mapping funct(rune) rune,  s string) string
```

The `strings.Map()` function takes two parameters:

- `funct(rune) rune`: The new character that the initial character will be replaced with.
- `string`: The given string in which the characters will be replaced.

> **Note:** If a negative value is returned when a character is mapped, it is dropped from the string without a replacement.

## Example

The following example shows the implementation of `strings.Map()`:

```go
package main

import(
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

The output is:

```shell
Hallow33n
```

## Codebyte Example

The following example can be run and uses the `strings.Map()` function to replace the character `"a"` with `"@"`.

```codebyte/golang
package main

import(
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
