---
Title: 'Arrays'
Description: 'Arrays are numbered, fixed-length sequences of elements of the same data type.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Structures'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

**Arrays** are numbered, fixed-length sequences of elements of the same [data type](https://www.codecademy.com/resources/docs/go/data-types).

## Arrays vs. Slices

Arrays differ from [slices](https://www.codecademy.com/resources/docs/go/slices) in that their size cannot be changed after being created.

Another difference is that an array is passed to a function as a copy of the array, whereas a slice is passed as a reference to the underlying array. This means that changes done to an array passed to a function will not be reflected outside that function, but changes done to a slice will affect the underlying array.

## Syntax

There are two ways of creating an array:

- With the `var` keyword
- With the `:=` short assignment statement and curly brackets (with elements optionally listed within them)

```pseudo
var arr1 [n]type

arr2 := [n]type{el1, el2, ..., eln}
```

In both cases, `n` represents the capacity of the array and `type` is the desired type.

> **Note:** Curly brackets are needed in the `:=` assignment statement. Conversely, the `var` keyword does not allow them, meaning that element values cannot be set in the same line.

## Examples

In the following example, two arrays, `zeroes1` and `zeroes2`, are created without initial values. For arrays and slices in Go, numeric values are predefined as 0:

```go
var zeroes1 [5]int

zeroes2 := [3]float64{}

fmt.Println(zeroes1)
// Output: [0, 0, 0, 0, 0]

fmt.Println(zeroes2)
// Output: [0, 0, 0]
```

The next example sets the element values using the `:=` assignment statement:

```go
array := [3]string{"Hello", "World", "!"}

fmt.Println(array)
// Output: [Hello World !]
```

## Accessing Elements

Array elements can be accessed using the array's name followed by the element's index in square brackets:

```go
var array [3]int

array[0] = 1
array[1] = 2
array[2] = 3

fmt.Println(array[0], array[1], array[2])
// Output: 1 2 3
```

## Multidimensional Arrays

Multidimensional arrays can be created and accessed similarly to the one-dimensional arrays.

It is possible to declare arrays of any number of dimensions with one of the following syntaxes:

```pseudo
var array [x1][x2]...[xn]type

array := [x1][x2]...[xn]type
```

- `x1, x2, ..., xn` represents the capacities of each dimension.
- `type` is the desired type of an array.

The following codebyte example creates a multidimensional array in two different ways and then accesses items within them:

```codebyte/golang
package main

import "fmt"

func main() {
  // Create an array of three arrays containing two integers
  var twoDim1 [3][2]int

  // Accessing the first item of the first array
  twoDim1[0][0] = 1

  // Accessing the second item of the second array
  twoDim1[1][1] = 2

  // Accessing the first item of the third array
  twoDim1[2][0] = 3

  fmt.Println(twoDim1)

  // Create an array of two arrays containing two floating-point numbers
  twoDim2 := [2][2]float64{{3.14, 2.72}, {2.1, 3.7}}

  fmt.Println(twoDim2)
}
```
