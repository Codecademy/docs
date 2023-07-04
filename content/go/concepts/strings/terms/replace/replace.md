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

The **strings.Replace()** returns a copy of the string that contains a new string that is created by replacing the elements in the old string.

## Syntax

```pseudo
func Replace(given str, old str, new str, n int) string
```

The `strings.Replace()` function takes four parameters:

- `given str`: given or the original string
- `old str`: the string to be replaced
- `new str`: the string that replaces the old string
- `n`: number of times the old string is replaced

> **Note**: If the old string is empty, it matches the start of the string. After each UTF-8 sequence, it yields up to k+1 replacements, giving a k-rune string. There is no limit to how many replacements can be made if n is less than zero.

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

The following example is runnable and uses the `strings.Replace()` method to replace the old string(one) with the new string(1).

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
