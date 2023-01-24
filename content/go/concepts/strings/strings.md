# Strings

A Go string is a data type that represents UTF-8 encoded read-only slice of bytes.

As in many other languages, strings in Go are sequences of characters. But even if Go strings share a number of similarities with strings in other languages, they also have some important differences that should be aware of.

Since each and every character in a Go String is represented by one or more bytes, they are immutable: once a Go string is created, its value cannot be changed. If you try to change it, the compiler will throw an error message.

The immutability of Go strings is one of the main differences between them and strings in other languages.

## Go string literals and escapes

### Go string literals

A Go string literal is a sequence of characters enclosed either within double-quotes "" (also called interpreted literals) or backticks `` (also called raw string literals).

There are some differences between using interpreted or raw string literals. The most important ones are that interpreted literals support escape characters but do not span multiple lines, while raw string literals do not support escape characters, cannot contain backticks and can span multiple lines.

Here is an example of how strings are defined and printed in Go using double quotes "":

```

package main
import "fmt"

func main() {
string_name := "This is an interpreted literal string" // Define string
fmt.Println(string_name) // Print string
}
```
Here is an example of how strings are defined and printed in Go using backticks ``:

```
package main
import "fmt"

func main() {
string_name := `This is a raw string literal string` // Define string
fmt.Println(string_name) // Print string
}
```

### Go string escapes

