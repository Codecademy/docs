---
Title: 'interfaces'
Description: 'An interace is a set of method signatures.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Control Flow'
  - 'interfaces'
CatalogContent:
  - 'learn-go'
  - 'paths/back-end-engineer-career-path'
---

An interace is a set of method signatures.

```go

type InterfaceName interface {
    method() return_type
}

```

A type implements an interface by implementing its methods. 
Interfaces are implemented implicitly.
Interfaces enable polymorphism in Go.

## Example

```go

package main

import (
	"fmt"
)

type marriage interface {
	love()
	arranged()
}

type john struct{}

func (a *john) love() {
	fmt.Println("love with john")
}

func (a *john) arranged() {
	fmt.Println("arranged marriage with john")
}

type max struct{}

func (a *max) love() {
	fmt.Println("love with max")
}

func (a *max) arranged() {
	fmt.Println("arranged marriage with max")
}

func newLife(guy marriage) {
	guy.love()
	guy.arranged()
}

func main() {
	newLife(&john{})
	newLife(&max{})
}

```

Output:

```bash

love with john
arranged marriage with john
love with max
arranged marriage with max

```

In the above example, 
 - The `marriage` interface has two methods `love` and `arranged`.
 - Structs `john` and `max` implements the `marriage` interface , note that neither `john` nor `max` has any explicit declaration to implement the interface.
 - As long as the struct has all the methods in the interface, it is said to implement the interface.
 - function `newLife` takes `marriage` interface as an argument.
 - It's possible to call the `newLife` function with `john` and `max` structs.

> Advantage of using interface is that we can pass any struct which implements the `marriage` interface to the `newLife` function. and it is possible to  change the implementation of the `love` and `arranged` methods in the `john` and `max` structs without affecting the `newLife` function.

> It is also possible to make a new type and `newLife` can use it without changing the `newLife` function as long as the new type implements the `marriage` interface.

Go's compiler will ensure that all the methods in the interface are implemented in the struct.

## Empty Interface

An interface with no methods is called an empty interface.

```go
type interfaceName interface {}
```

Tradeoff of using empty interface is lose of type safety as there are no methods its possible to pass any type to the function which takes empty interface as an argument.

Example: Println function in fmt package takes empty interface as an argument.

### go source code for fmt.Println function:

```go
// Println formats using the default formats for its operands and writes to standard output.
// Spaces are always added between operands and a newline is appended.
// It returns the number of bytes written and any write error encountered.
func Println(a ...interface{}) (n int, err error) {
	return Fprintln(os.Stdout, a...)
}
```
> due to the empty interface, we can pass any type to the `Println` function.














