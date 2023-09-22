---
Title: 'ToLower()'
Description: 'Converts a string to lowercase.'
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

The **`strings.ToLower()`** function is a built-in function in Golang that returns a new string with all the characters in the original string converted to lowercase. The original string is not modified.

## Syntax

```pseudo
strings.ToLower(str)
```

Where `str` is the string to convert into lowercase.

## Example

The following example demonstrates the use of the `strings.ToLower()` function.

```go
package main

import (
  "fmt"
  "strings"
)

func main() {
  str := "Hello World!"

  lowerStr := strings.ToLower(str)

  fmt.Println("The original string is:", str)
  fmt.Println("The lowercase version of the string is:", lowerStr)
}
```

The output will be:

```shell
The original string is: Hello World!
The lowercase version of the string is: hello world!
```

## Codebyte Example

The following example is runnable and uses the `strings.ToLower()` function to convert three strings into lowercase.

```codebyte/golang
package main

import (
  "fmt"
  "strings"
)

func main() {

  str1 := "wELcomE tO CodeCademy!"
  str2 := "This iS An EXAmpLE oF StrinG funCTion"
  str3 := "GOLANG"

  res1 := strings.ToLower(str1)
  res2 := strings.ToLower(str2)
  res3 := strings.ToLower(str3)

  fmt.Println("\nLowercase Strings :")
  fmt.Println("Result 1: ", res1)
  fmt.Println("Result 2:", res2)
  fmt.Println("Result 3:", res3)
}

```
