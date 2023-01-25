---
Title: 'strings'
Description: 'A string is a read-only data type. Strings are chains of arbitrary bytes that are represented by UTF-8 encoded characters.' 
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

A Go **string** is a read-only data type that represents UTF-8 encoded slice of bytes.

As in many other languages, strings in Go are sequences of characters. Since each and every character in a Go string represents one or more bytes, *they are immutable*: once a Go string is created, its value cannot be changed. If you try to change it, the compiler will throw an error message. This is a main difference between strings in Go and strings in other languages.

## String Literals

In Go, a string literal is a sequence of characters enclosed either within double-quotes `""` (also called *interpreted literals*) or backticks ` `` `  (also called *raw string literals*).

There are some differences between using interpreted or raw string literals. The most important ones are that interpreted literals support escape characters but do not span multiple lines, while raw string literals do not support escape characters, cannot contain backticks and can span multiple lines.

Here is an example of how strings are defined and printed in Go using double quotes `""`:

```go
package main
import "fmt"

func main() {
  string_name := "This is an interpreted literal string" // This defines the string.
  fmt.Println(string_name) // This prints the string.
}
```

Here is an example of how strings are defined and printed in Go using backticks ``:

```go
package main
import "fmt"

func main() {
  string_name := `This is a raw string literal` // This defines the string.
  fmt.Println(string_name) // This prints the string.
}
```

## String escapes

As it was mentioned previously, escape characters are only supported in interpreted literals (remember: an interpreted literal is a string that uses double quotes `""`). Here you can see a list of some usefuls escape characters supported by Go strings: 

|	Description		    |	Escape Character	  |
|	:---:			        |		:---:			        | 
| Single quote 	    |       ` \'`         |   
| Double quote      |       ` \''` 	      | 
| Backslash 	      |       ` \\` 	      |
| New line 			    |       ` \n`		      | 
| Horizontal tab    |       ` \t` 	      | 
| Vertical tab		  |       `\v` 		      | 
| Backspace 		    |       ` \b` 	      |  
| Carriage return   |       ` \r` 	      | 
| Go to next page   |     ` \f`           |   

Strings are useful to avoid ambiguities when the string you are creating has a character that may be problematic. An example of this would be if you want to define `There is no "I" in TEAM` as an interpreted literal string. Since the string has double quotes in it, the compiler would throw an error message if you try to define it as it is. This can be avoided by using the Double quote escape character ` \''`. Take a look at this example:

```go
package main
import "fmt"

func main() {
  string_name := "There is no "I" in TEAM" // This line attempts to define the string, but causes an error.
  fmt.Println(string_name) // This line would print the string if it had been correctly defined.
}
```

After running this code, the compiler will output a message like this:

```
# command-line-arguments
./main.go:5:32: syntax error: unexpected I at end of statement
```

This issue is solved by using the double quote escape character ` \''` like this:

```go
package main
import "fmt"

func main() {
  string_name := "There is no \"I\" in TEAM" // This defines the string.
  fmt.Println(string_name) // This prints the string.
}
```