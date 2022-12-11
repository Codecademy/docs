---
Title: 'Arrays'
Description: 'Array in Go is a fixed-length sequence of elements of a particular type.'
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

In Go, an **array** is a numbered list of elements of the same type.

## Differences Between Arrays And Slices

Unlike slices, arrays have a fixed length, meaning their size cannot be changed once they are created. 

Another difference is that an array is passed to a function as a copy of the array, whereas a slice is passed as a reference to the underlying array. That means that changes done to an array passed to a function will not be reflected outside that function, but changes done to a slice will affect the underlying array.

## Syntax

There are two ways of creating an array. Both include specifying the array's length and data type, and can be used interchangeably. One of them uses the `var` keyword, and the other uses the `:=` short assignment statement and curly brackets (optionally) with elements listed within them.

```pseudo
var arr1 [n]type

arr2 := [n]type{el1, el2, ..., eln}
```

In the above example, `n` represents the capacity of an array, and `type` is the desired type of the array.

It is important to note that when using the `:=` assignment statement, curly brackets are necessary, while the `var` keyword does not allow them, meaning that the array items' values cannot be set in the same line.

## Examples

Creating zeroed arrays:

```go 
var zeros1 [5]int

zeros2 := [3]float64{}

fmt.Println(zeros1)
// Output: [0, 0, 0, 0, 0] 

fmt.Println(zeros2)
// Output: [0, 0, 0]
```

In the above examples, two arrays are created without declaring their values. In Go, number values in arrays and slices are predefined as 0.

Creating an array and setting their values using the `:=` assignment statement:

```go
array := [3]string{"Hello", "World", "!"}

fmt.Println(array)
// Output: [Hello World !]
```

## Accessing Array Items

You can acces an item of an array by combining the array's name and the item's index in brackets:

```go
var array [3]int

array[0] = 1
array[1] = 2
array[2] = 3

fmt.Println(array[0], array[1], array[2])

// Output: 1 2 3
```

## Multidimensional Arrays

Multidimensional arrays can be created and accessed similarly to the one-dimensional arrays, using the `var` keyword:

```go
// Create an array of three arrays containing two integers 
var twoDim [3][2]int

// Accessing the first item of the first array
twoDim[0][0] = 1

// Accessing the second item of the second array
twoDim[1][1] = 2

// Accessing the first item of the third array
twoDim[2][0] = 3

fmt.Println(twoDim)
// Output: {{1, 0}, {0, 2}, {3, 0}}
```

Analogically, it is possible to create them with the `:=` assignment statement:

```go
// Create an array of two arrays containing two floating point numbers
twoDim = [2][2]float64{{3.14, 2.72}, {2.1, 3.7}}

fmt.Println(twoDim)
// Output: {{3,14, 2.72}, {2.1, 3.7}}
```

It is possible to declare arrays of any number of dimensions with the following syntax:

```pseudo
var array [x1][x2]...[xn]type

array := [x1][x2]...[xn]type
```

In the above example, `x1, x2, ..., xn` represent the capacities of each dimension, and `type` is the desired type of an array.