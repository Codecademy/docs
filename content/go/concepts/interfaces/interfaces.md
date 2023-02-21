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

An interface in go can be embedded in other interfaces or structs.

### Embedding interface in a struct and another interface:

```go
package main

import "fmt"

// any type that need to implement marriage should also implement all methods of dating
type marriage interface {
	dating
	love()
	arranged()
}

type dating interface {
	compatibility()
}

type john struct {
	age int
}

func (a john) love() {
	fmt.Println("love with john")
}

func (a john) arranged() {
	fmt.Println("arranged marriage with john")
}
func (a john) compatibility() {
	fmt.Println("compatible with john")
}

type parents struct {
	//named marriage interface
	m     marriage
	quote string
}

type lovers struct {
	//unnamed marriage interface
	marriage
	quote string
}

func main() {
	a := john{age: 24}
	p := parents{quote: "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more", m: a}
	
	//p.love()
	//as this has named marriage interface m calling directly with .m would raise compiler error
	/*-----------------------ERROR-----*---------------------------*/
	// ./prog.go:39:4: p.love undefined (type parents has no field or method love)

	p.m.love()
	p.m.compatibility()
	p.m.arranged()

	l := lovers{quote: "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more", marriage: a}
	fmt.Println("\n", l.quote, "\n")
	//its possible to directly access the methods of embedded interface if the embedded interface is anonymous or unnamed.
	l.love()
	l.compatibility()
	l.arranged()
}

```

## output:

```shell

love with john
compatible with john
arranged marriage with john

 I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more 

love with john
compatible with john
arranged marriage with john

Program exited.

```


## codebyte example

```codebyte/golang

package main
import "fmt"

func main() {
	fmt.Println("practice here")
}

```










