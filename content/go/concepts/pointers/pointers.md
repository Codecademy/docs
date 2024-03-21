---
Title: 'Pointers'
Description: 'Pointers in Go are variables that store the memory address of another variable. They are used to access and modify the value stored at a specific memory address.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Pointers'
  - 'References'
  - 'Memory Addresses'
  - 'Variables'
CatalogContent:
  - 'learn-go'
  - 'paths/back-end-engineer-career-path'
---

Pointers in Go are an essential feature that allows working directly with a program's memory. A pointer stores the memory address of another variable. This can be useful for accessing and modifying the value stored at that specific memory address.

## Pointer Declaration

In Go, a pointer is declared using the `*` operator before the type of data to indicate that the variable is a pointer to that type of data. Then, to assign it the memory address of another variable, we use the `&` operator.

```go
var x int = 7
var ptr *int = &x

fmt.Println(ptr) // Output: 0xc000096068
```

In this example, `ptr` is a pointer to an integer (`*int`) that stores the memory address of the variable `x`.

## Accessing Value through a Pointer

To access the value stored at the memory address pointed to by a pointer, you use the `*` operator (`dereferencing operator`).

```go
fmt.Println(*ptr) // Output: 7
```

This will print the value stored at the memory address pointed to by ptr.

## Modifying Value through a Pointer

Pointers allow you to indirectly modify the value of a variable by accessing the memory address of that variable.

```go
*ptr = 10
```

This will change the value of the variable `x` to 20, as `ptr` points to the memory address of `x`.

## Checking for Null Pointers

In Go, pointers are automatically initialized with the null value (`nil`). It's important to check if a pointer is null before attempting to access the value it points to.

```go
var ptr *int

if ptr != nil {
    fmt.Println("The pointer is not nil.")
} else {
    fmt.Println("The pointer is nil.")
}
```

## Code Example

```go
package main

import "fmt"

func main() {
    x := 7
    var ptr *int = &x

    fmt.Println("Value of x:", x)
    fmt.Println("Memory address of x:", ptr)
    fmt.Println("Value pointed by ptr:", *ptr)

    *ptr = 10
    fmt.Println("New value of x:", x)
}

```

This example illustrates how to declare, initialize, access, and modify values through a pointer in Go.

For further information on pointers in Go and their usage in practical situations, refer to the official Go documentation on pointers and memory management.
