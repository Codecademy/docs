---
Title: 'Replace()'
Description: 'Replaces occurrences of a specified substring within a given string with another substring.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Characters'
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`strings.Replace()`** method replaces all, or a number of, occurrences of a specified substring within a given string with another substring. It returns a new string with the replacements made.

## Syntax

```pseudo
func Replace(provided str, old str, new str, n int) string
```

If the `old` string is empty, it corresponds to the beginning of the `provided` string. It returns up to k+1 replacements after each UTF-8 sequence, resulting in a k-rune string. If `n` is a negative integer, there is no limit to the number of substitutions that can be made.

The `strings.Replace()` function takes four parameters:

- `provided`: The original string.
- `old`: The string that will be replaced.
- `new`: The string that replaces the `old` string.
- `n`: The count of replacements made of the `old` string.

## Example

The following example shows the implementation of `strings.Replace()`:

```go
package main

import(
  "fmt"
  "strings"
)

func main(){
  fmt.Println(strings.Replace("codecademy CODEcademy codecademy", "code", "</> ", -1))
  fmt.Println(strings.Replace("empty old string", "", "!", 2))
}
```

The output will be:

```shell
</> cademy CODEcademy </> cademy
!e!mpty old string
```

## Codebyte Example

The provided example is executable and demonstrates the usage of the `strings.Replace()` function. It replaces occurrences of the old string `"one"` with the new string `"1"`.

```codebyte/golang
package main

import(
  "fmt"
  "strings"
)

func main(){
  fmt.Println(strings.Replace("one two one two one one", "one", "1", 2))
}
```
