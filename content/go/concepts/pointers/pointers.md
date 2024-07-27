---
Title: 'Pointers'
Description: 'Pointers are a fundamental feature in Go that enable developers to manage memory efficiently and directly.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Pointers'
  - 'Memory'
  - 'Variables'
  - 'Values'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

**Pointers** in Go are an essential feature that allows working directly with a program's [memory](https://www.codecademy.com/resources/docs/go/memory). A pointer stores the memory address of another [variable](https://www.codecademy.com/resources/docs/go/variables). This can be useful for accessing and modifying the value stored at that specific memory address.

## Pointer Declaration

In Go, a pointer is declared using the dereferencing operator (`*`) before the [data type](https://www.codecademy.com/resources/docs/go/data-types) to indicate that the variable is a pointer to that type of data. Then, to assign it the memory address of another variable, the `&` operator is used:

```go
var x int = 7
var ptr *int = &x

fmt.Println(ptr)
```

The output for the above code contains the memory address that the pointer is pointing to:

```shell
0xc000096068
```

In this example, `ptr` is a pointer to an integer (`*int`) that stores the memory address of the variable `x`.

## Accessing Values Through a Pointer

To access the value stored at the memory address pointed to by a pointer, the `*` operator is used:

```go
var x int = 7
var ptr *int = &x

fmt.Println(*ptr)
```

The above code will print the value stored at the memory address pointed to by `ptr`:

```shell
7
```

## Modifying Values Through a Pointer

Pointers allow developers to indirectly modify the value of a variable by accessing the memory address of that variable:

```go
var x int = 7
var ptr *int = &x

*ptr = 10
```

This will change the value of the variable `x` to 10, as `ptr` points to the memory address of `x`:

```shell
10
```

## Checking for Null Pointers

In Go, pointers are automatically initialized with the null value (`nil`). It's important to check if a pointer is null before attempting to access the value it points to. Attempting to dereference a null pointer will result in a runtime panic, which may cause the program to stop abruptly:

```go
var ptr *int

fmt.Println(ptr)
```

The output for the above code is:

```shell
<nil>
```

## Example

Here's a comprehensive example that declares, initializes, accesses, and modifies values through pointers in Go:

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

The output for the above code is:

```shell
Value of x: 7
Memory address of x: 0xc00000a0f8
Value pointed by ptr: 7
New value of x: 10
```
