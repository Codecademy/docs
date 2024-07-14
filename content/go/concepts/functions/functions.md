---
Title: 'Functions'
Description: 'Functions are blocks of code that can be reused multiple times.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Anonymous Functions'
CatalogContent:
  - 'learn-go'
  - 'paths/back-end-engineer-career-path'
  - 'paths/computer-science'
---

**Functions** are blocks of code that can be reused multiple times. They are defined using the `func` keyword, followed by the function name, parameters, and return type.

## Syntax

Syntax for a function in Go is as follows:

```pseudo
func functionName(parameter type)(returnValue type){
    return value
}
```

The `parameter` and `returnValue` names must be either all present or all absent.

Parameters are passed by value, meaning the function receives a copy of the parameter's value. For a parameter to be passed by reference, allowing it to be modified within the function, it can be declared as a pointer type.

Below are some examples of how to define functions in Go:

## Examples

```go
package main

import (
  "fmt"
)

// Parentheses can be omitted if there is only one parameter
func Hello(name string) string {
  return "This is being returned with no parentheses. " + name
}

func MultipleReturns(a int64, b int64) (int64, int64) {
  return a + b, a - b
}

func MultipleReturns2(a int64, b int64) (c int64, d int64) {
  x, y := a+b, a-b
  c = x
  d = y
  return // Return names don't need to be specified if using named return values in func definition
}

// Passing a function as a parameter
func printResult(f func(int64, int64) (int64, int64), a int64, b int64) {
  c, d := f(a, b)
  fmt.Println(c, d)
}

// Functions can return functions as well!
func returnFunc() func() {
  return func() {
    fmt.Println("This is a function returned by another function.")
  }
}

func main() {
  returnFunc()()
  printResult(MultipleReturns, 10, 3)
  fmt.Println(Hello("nice right"))
  fmt.Println(MultipleReturns(10, 3))
  fmt.Println(MultipleReturns2(10, 3))
}
```

This outputs the following:

```shell
Hey I am a function returned by function sounds cool right?
13 7
check me i dont have parenthesis around my return see nice right
13 7
13 7

Program exited.
```

Functions must be directly declared at package level, not inside other functions. Otherwise, an error message is thrown:

```go
package main

import "fmt"

func main() {
  func name() {
    fmt.Println("hey")
  }()
}
```

```shell
./prog.go:6:7: syntax error: unexpected name, expecting (
./prog.go:8:3: syntax error: unexpected ( after top level declaration

Go build failed.
```

A function can be defined inside a function as shown below:

```go
package main

import "fmt"

func main() {
  func() {
    fmt.Println("Hey, I have no name")
  }()
  greeting := "Hey, there."

  // Greeting can be accessed inside of nested functions and can be changed
  // Or assigned to a variable to make it reusable

  secondWay := func(name string) {
    greeting = "Hey " + name

  }
  secondWay("Pavan")
  fmt.Println(greeting)

}
```

This produces the following output:

```shell
Hey, I have no name
Hey Pavan

Program exited.
```

## Anonymous Functions

Anonymous functions are similar to normal functions, but do not have a name. They can be called immediately after being defined.
Anonymous functions can be passed as parameters to another function.
They are also called closure/function literals.

Below is an example of an anonymous function:

```go
package main

import "fmt"

func main() {

  x, y := func() (int, int) {
    fmt.Println("This function has no parameters.")
    return 3, 4
  }()
  fmt.Println(x, y) //3 and 4

  func() {
    fmt.Println("x*y =", x*y)
  }()

  // The following anonymous function has no results so it can be omitted

  func(a, b int) { // Equivalent to func(a int,b int)
    println("a+b =", a+b)
  }(x, y)

  func(keys ...int) { // Variadic parameters
    for _, key := range keys {
      fmt.Println(key)
    }
  }(1, 2, 3, 4, 5) // Can pass any number of arguments

}
```

This example produces the following output:

```bash
This function has no parameters.
3 4
x*y = 12
a+b = 7
1
2
3
4
5

Program exited.
```

## Variadic Parameters

Each function can have at most one variadic parameter (keys ...int).
The type of a variadic parameter is always a slice type.

`Println` is a variadic function.

This following shows the internal implementation of `Println` in Go:

```shell
// Println formats using the default formats for its operands and writes to standard output.
// Spaces are always added between operands and a newline is appended.
// It returns the number of bytes written and any write error encountered.
func Println(a ...any) (n int, err error) {
  return Fprintln(os.Stdout, a...)
}
```

## Methods

- A function is called a method if it is defined with a receiver.
- A receiver is a parameter that is declared before the function name.
- The receiver can be of any type, including a struct type.
- Receiver can be a pointer or a value.
- If the receiver is a pointer, the function can modify the value to which the receiver points.
- If the receiver is a value, the function can modify a copy of the value to which the receiver points.

**Implicit dereferencing** refers to the automatic process of taking the address of a value and passing a pointer to a method when a method with a pointer receiver is called on that value.

In Go, the compiler does this automatically.

Below is an example of methods in Go:

```go
package main

import (
  "fmt"
)

type student struct {
  name  string
  email string
}

func (s student) passyByValue(name string) {
  s.name = name
}
func (s *student) passByRef(email string) {
  s.email = email
}
func main() {
  s := student{"pavan", "pavan@example.com"}
  fmt.Println("initially", s)
  s.passyByValue("xyz")
  fmt.Println("after pass by value", s)
  s.passByRef("pooja@example.com")
  // Equivalent to (&s).passByRef
  // This is because the compiler will automatically convert s to &s implicit dereferencing
  fmt.Println("after pass by reference", s)

}
```

This example results in the following output:

```bash
initially {pavan pavan@example.com}
after pass by value {pavan pavan@example.com}
after pass by reference {pavan pooja@example.com}

Program exited.
```

## Points to Remember

Names of the functions must be unique in the package scope; exceptions for this are `init` or when using a blank identifier (these can never be called directly they are only used to implement interfaces or provide helper functionality.)

Reasons to use a blank identifier is for better readability and to say that this function is not meant to be called directly from outside the package.
Another use case for blank identifier is to implement interfaces.

<!-- TODO: update link here after interfaces in go is done or make a example here with interfaces need opinion of someone -->

- Value semantics is appropriate when the data is safe to be copied. In this case, passing a copy of the data to a function or method is sufficient and can improve performance by avoiding the overhead of passing a pointer.

- Pointer semantics is appropriate when the data is not safe to be copied. In this case, passing a pointer to the data allows the function or method to modify the original data. The use of pointers is more efficient when dealing with large data structures, as it avoids the cost of copying the entire data structure. However, pointers add complexity to the program.

The `init` function is called before the `main` function and can be called multiple times.

Below is an example with the `init` function:

### Example

```go
package main

import (
  "fmt"
)

func init() {
  fmt.Println("Initializing package main")
}

func init() {
  fmt.Println("Initializing package main again")
}

func main() {
  fmt.Println("Hello, World!")
  _init()
}
func _init() {
  fmt.Println("Initializing package main!!")
}
```

This example results in the following output:

```shell
Initializing package main
Initializing package main again
Hello, World!
Initializing package main!!

Program exited.
```

## Codebyte Example

The following codebyte example provides another example of a function. It is runnable and can be edited:

```codebyte/golang
package main

import (
  "fmt"
)

func Hello(name string) string {
  return "Hello " + name
}
func main() {
  fmt.Println(Hello("World!"))
}
```
