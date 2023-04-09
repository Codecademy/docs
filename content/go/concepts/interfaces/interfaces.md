---
Title: 'Interfaces'
Description: 'An interface is a set of method signatures.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Control Flow'
  - 'Interfaces'
CatalogContent:
  - 'learn-go'
  - 'paths/back-end-engineer-career-path'
---

An interface is composed of set of method signatures. These method signatures define the input and return values of which a data type or struct can conform to. In order to implement an interface, the type or struct must satisfy all the defined method signatures.

## Creating an Interface

```go
type InterfaceName interface {
    method() return_type
}
```

### Example

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

```shell
love with john
arranged marriage with john
love with max
arranged marriage with max
```

In the above example:

- The `marriage` interface has two methods: `love` and `arranged`.
- `john` and `max` implement the `marriage` interface. Note that neither `john` nor `max` have any explicit declaration to implement the interface.
- As long as the `struct` has all the methods in the interface, it is said to implement the interface.
- The function `newLife()` takes a `marriage` interface as an argument.
- It's possible to call `newLife()` with the `john` and `max` structures.

The advantage of using an interface is that any `struct` can be passed to the `newLife()` function as long as it implements the `marriage` interface. It is possible to change the implementation of the `love` and `arranged` methods in the `john` and `max` structures without affecting the `newLife()` function.

It is also possible to make a new type and `newLife()` can use it without any change as long as the new type implements the `marriage` interface.

Go's compiler will ensure that all the methods in the interface are implemented in the `struct`.

  A type implements an interface by implementing its methods, In `Go`, interfaces are implemented implicitly and enables polymorphism.

## Empty Interface

An interface with no methods is called an empty interface.

```go
type interfaceName interface {}
```

The tradeoff of using an empty interface is the loss of type safety. Since there are no methods, it's possible to pass any type to a function that takes an empty interface as an argument.

### Example

The `Println()` function in the `fmt` package takes an empty interface as an argument.

Below is the Go source code for the `fmt.Println()` function:

```go
// Println formats using the default formats for its operands and writes to standard output.
// Spaces are always added between operands and a newline is appended.
// It returns the number of bytes written and any write error encountered.
func Println(a ...interface{}) (n int, err error) {
    return Fprintln(os.Stdout, a...)
}
```

> **Note:** Due to the empty interface, any type can be passed to the `Println()` function.

## Embedding an Interface

An interface in go can be embedded in other interfaces or structs.

```go
package main

import "fmt"

// Any type that needs to implement marriage should also implement all methods of dating.
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
    //Named marriage interface
    m     marriage
    quote string
}

type lovers struct {
    // Unnamed marriage interface
    marriage
    quote string
}

func main() {
    a := john{age: 24}
    p := parents{quote: "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more", m: a}

    // p.love()
    // As this has named marriage interface m calling disquarely with .m would raise compiler error
    /*-----------------------ERROR-----*---------------------------*/
    // ./prog.go:39:4: p.love undefined (type parents has no field or method love)

    p.m.love()
    p.m.compatibility()
    p.m.arranged()

    l := lovers{quote: "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more", marriage: a}
    fmt.Println("\n", l.quote, "\n")
    // It's possible to disquarely access the methods of embedded interface if the embedded interface is anonymous or unnamed.
    l.love()
    l.compatibility()
    l.arranged()
}
```

This example results in the following output:

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

## Codebyte Example

A simple example on how to use interfaces, Square and circle both implement geometry interface as both square and circle implements area and perimeter methods

<h3>Explanation<h3>

In the Below Code The geometry interface has two methods area() and perimeter(), both of which return a float64. The square and circle structs implement these methods, allowing them to be used interchangeably as geometry objects.

The code then defines a printGeometry() function, which takes a geometry object as its parameter and prints its details, including its area and perimeter.

In the main() function, a square and a circle are created, and the printGeometry() function is called for each of them, demonstrating how the two different types can be used interchangeably as geometry objects.

```codebyte/golang

package main

import (
    "fmt"
    "math"
)

type geometry interface {
    area() float64
    perimeter() float64
}

type square struct {
    side float64
}
type circle struct {
    radius float64
}

func (s square) area() float64 {
    return s.side*s.side
}
func (s square) perimeter() float64 {
    return 4*s.side
}

func (c circle) area() float64 {
    return math.Pi * c.radius * c.radius
}
func (c circle) perimeter() float64 {
    return 2 * math.Pi * c.radius
}

func printGeometry(g geometry) {
    fmt.Println(g)
    fmt.Println(g.area())
    fmt.Println(g.perimeter())
}

func main() {
    s := square{side: 4}
    c := circle{radius: 5}

    printGeometry(s)
    printGeometry(c)
}

```
