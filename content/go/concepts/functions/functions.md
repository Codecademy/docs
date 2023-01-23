---
Title: 'Functions'
Description: 'Functions are a block of code that can be reused multiple times'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Anonymous Functions'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
  - 'paths/back-end-engineer-career-path'
---

**Functions** are a block of code that can be reused multiple times
Functions are defined using the `func` keyword followed by the name of the function, the parameters and the return type.
Go use pass by value for parameters, which means that the function will receive a copy of the value of the parameter. If you want to modify the parameter, you need to pass a pointer to the parameter.

## Syntax

Syntax for a function in Go is as follows:

```pseudo
func functionName(parameter type)(resultReturn type){
    return value
}
```

## Examples

In the following example, we create a function that takes string as a parameter and returns a string:

```go
// You can edit this code!
// Click here and start typing.
package main

import (
	"fmt"
)

func Hello(name string) string {
	return "Hello " + name
}

func MultipleReturns(a int64, b int64) (int64, int64) {
	return a + b, a - b
}

func MultipleReturns2(a int64, b int64) (c int64, d int64) {
	x, y := a+b, a-b
	c = x
	d = y
	return // return c, d
}

func main() {
	fmt.Println(Hello("World"))
	fmt.Println(MultipleReturns(10, 3))
	fmt.Println(MultipleReturns2(10, 3))
}

```

output is:

```bash
Hello World
13 7
13 7

Program exited.
```

Note:Functions must be directly declared at package level, not inside other functions.

## Anonymous Functions

The definition of anonymous function is same as normal functions except anonymous functions won't have name
It can be called right after its defined
The parameter names and result names must be either all present or all absent.
Anyonymous functions are useful when you want to pass a function as a parameter to another function.
They are also called closures/functions literals.

Each function can have at most one variadic parameter. The type of a variadic parameter is always a slice type
There is a builtin function we have been using for a while with variadic parameters
Println is a variadic function refer to https://golang.org/pkg/fmt/#Println
for more specific information https://cs.opensource.google/go/go/+/refs/tags/go1.19.5:src/fmt/print.go;l=293

```go
// You can edit this code!
// Click here and start typing.
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

	// The following anonymous function have no results. so it can be omitted

	func(a, b int) { // equivalent to func(a int,b int)
		println("a+b =", a+b)
	}(x, y)



	func(keys ...int) { // variadic parameters
		for _, key := range keys {
			fmt.Println(key)
		}
	}(1, 2, 3, 4, 5)// can pass any number of arguments


}

```

output:

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

### Methods

A function is called a method if it is defined with a receiver.
A receiver is a parameter that is declared before the function name.
The receiver can be of any type, including a struct type.
Receiver can be a pointer or a value.
If the receiver is a pointer, the function can modify the value to which the receiver points.
If the receiver is a value, the function can modify a copy of the value to which the receiver points.

**_implicit dereferencing_** refers to the automatic process of taking the address of a value and passing a pointer to a method when a method with a pointer receiver is called on that value.
In go complier does this automatically for us.

```go
// You can edit this code!
// Click here and start typing.
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
	// equivalent to (&s).passByRef
	// this is because the compiler will automatically convert s to &s implicit dereferencing
	fmt.Println("after pass by reference", s)


}
```

output:

```bash
initially {pavan pavan@example.com}
after pass by value {pavan pavan@example.com}
after pass by reference {pavan pooja@example.com}

Program exited.
```

- Value semantics is appropriate when the data is safe to be copied, In this case, passing a copy of the data to a function or method is sufficient and can improve performance by avoiding the overhead of passing a pointer.

- Pointer semantics is appropriate when the data is not safe to be copied, In this case, passing a pointer to the data allows the function or method to modify the original data, and the changes will be reflected.
  Using pointers is more efficient when dealing with large data structures, as it avoids the cost of copying the entire data structure , but pointers add complexity to the program.

### points to remember

names of the functions must be unique in the package scope exceptions for this are init and using blank identifier(these can never be called directly they are only used to implement interfaces or provide helper functionality.)
reason we use blank identifier is for better readability and to say that this function is not meant to be called directly from outside the package

<!-- TODO: update link here after interfaces in go is done or make a example here with interfaces need opinion of someone -->

Another usecase for blank identifier is to implement interfaces which can be covered in interfaces section

init function is called before main function and can be called multiple times

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

Output:

```bash
Initializing package main
Initializing package main again
Hello, World!
Initializing package main!!

Program exited.
```

```codebyte/golang
package main

import (
	"fmt"
)

func Hello(name string) string {
	return "Hello " + name
}

func MultipleReturns(a int64, b int64) (int64, int64) {
	return a + b, a - b
}

func MultipleReturns2(a int64, b int64) (c int64, d int64) {
	x, y := a+b, a-b
	c = x
	d = y
	return // return c, d
}

func main() {
	fmt.Println(Hello("World"))
	fmt.Println(MultipleReturns(10, 3))
	fmt.Println(MultipleReturns2(10, 3))
}
```
