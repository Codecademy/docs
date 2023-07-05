---
Title: 'Replace()' 
Description: 'Return a copy of the given string with the first n non-overlapping instances of old replaced by new one.' 
Subjects: 
  - 'Code Foundations'
  - 'Computer Science
Tags: 
  - 'Strings'
  - 'Characters'
  - 'Functions'
  - 'Methods'
CatalogContent: 
  - 'learn-go'
  - 'paths/computer-science'
---

The **strings.Replace()** replaces all or number of occurrences of a specified substring within a given string with another substring. It returns a new string with the replacements made.

## Syntax

```pseudo
func Replace(provided str, old str, new str, n int) string
```

If the 'old str' is empty, it corresponds to the beginning of the 'provided str'. It returns up to k+1 replacements after each UTF-8 sequence, resulting in a k-rune string. If n is a negative integer, there is no limit to the number of substitutions that can be made.

The `strings.Replace()` function takes four parameters:

- `provided str`: given or the original string
- `old str`: the string that will be replaced
- `new str`: the string that replaces the old string
- `n`: the count of replacements made for the old string.

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

## Codebyte Example (if applicable)

The provided example is executable and demonstrates the usage of the `strings.Replace()` function. It replaces occurrences of the old string "one" with the new string "1".

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
