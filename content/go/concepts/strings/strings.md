---
Title: 'Strings'
Description: 'A string is a read-only data type. Strings are chains of arbitrary bytes representing UTF-8 encoded characters.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Data Types'
  - 'Characters'
CatalogContent:
  - 'learn-go'
  - 'path/computer-science'
---

A Go **string** is a read-only [data type](https://www.codecademy.com/resources/docs/go/data-types) that represents a UTF-8 encoded slice of bytes.

As in many other languages, strings in Go are sequences of characters. Strings are immutable. Once a string is created in Go, its value cannot be changed. Attempts at changing it will result in the compiler throwing an error message. This is a key difference between strings in Go and strings in other languages.

## String Literals

In Go, a string literal is a sequence of characters enclosed either within double-quotes `""` (also called interpreted literals) or backticks ` `` ` (also called raw string literals).

There are some differences between using interpreted or raw string literals. The most important ones are that interpreted literals support escape characters but do not span multiple lines, while raw string literals do not support escape characters, cannot contain backticks, and can span multiple lines.

Here is an example of how strings are defined and printed in Go using double quotes `""`:

```go
package main
import "fmt"

func main() {
  string_name := "This is an interpreted literal string" // This defines the string.
  fmt.Println(string_name) // This prints the string.
}
```

Here is an example of how strings are defined and printed in Go using backticks ` `` `:

```go
package main
import "fmt"

func main() {
  string_name := `This is a raw string literal` // This defines the string.
  fmt.Println(string_name) // This prints the string.
}
```

## String Escapes

As mentioned previously, escape characters are only supported in interpreted literals (an interpreted literal is a string that uses double quotes `""`). The following is a list of some useful escape characters supported by Go strings:

|   Description   | Escape Character |
| :-------------: | :--------------: |
|  Single quote   |       `\'`       |
|  Double quote   |       `\"`       |
|    Backslash    |       `\\`       |
|    New line     |       `\n`       |
| Horizontal tab  |       `\t`       |
|  Vertical tab   |       `\v`       |
|    Backspace    |       `\b`       |
| Carriage return |       `\r`       |
| Go to next page |       `\f`       |

Escape characters are useful to avoid ambiguities when the string being created has a character that may be problematic. An example of this would be defining `"There is no "I" in TEAM"` as an interpreted string literal. Since the string has double quotes in it, the compiler would throw an error message. This can be avoided by using the double quote escape character `\"`. The following shows an example where the compiler would throw an error message due to double quotes being used within an interpreted string literal:

```go
package main
import "fmt"

func main() {
  string_name := "There is no "I" in TEAM" // This line attempts to define the string, but causes an error.
  fmt.Println(string_name) // This line would print the string if it had been correctly defined.
}
```

After running this code, the compiler will output a message like this:

```shell
# command-line-arguments
./main.go:5:32: syntax error: unexpected I at end of statement
```

This issue is solved by using the double quote escape character `\"` like this:

```go
package main
import "fmt"

func main() {
  string_name := "There is no \"I\" in TEAM" // This defines the string.
  fmt.Println(string_name) // This prints the string.
}
```

## String Functions

The `strings` package contains many different string functions used to manipulate strings. The `strings` package must be imported before using these functions, as in the example below:

```go
package main
import (
  "fmt"
  "strings"
)
func main() {
  name := "Codecademy"
  find := "d"
  fmt.Println(find, "is in", name, "at index", strings.Index(name,find))
}
```

Below is a selection of string functions from the `strings` package.
