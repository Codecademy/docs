---
Title: 'Slices'
Description: 'Slices in Go are similar to arrays, but with the flexibility of being able to change their size.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Slices'
  - 'Arrays'
  - 'Data Types'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

A **slice** in Go is a pointer to a section of an array. They are like arrays, but with the flexibility of being dynamically sized. Care needs to be taken when modifying elements in slices, as the element value will change in the underlying array. A slice has a length and a capacity.

The length of a slice is the number of elements in the slice. The length can be found using `len(slice_name)`.

The capacity of a slice is the number of elements in the underlying array from the slice's start index to the end of the array. The capacity can be found using `cap(slice_name)`.

## Creating and Initializing Slices

### Declare and Initialize a New Slice

Slices can be declared and initialized in one line.

#### Syntax

Slices can be declared and initialized like arrays, with a data type and a list of values, except without the size specified in the square brackets `[]`.

```pseudo
new_slice := []<datatype>{<values>}
```

#### Example

A new slice containing integers, the length and capacity will both be 5.

```go
  s := []int{1,2,3,4,5}
```

### A Slice from an Existing Array

A slice can be created from another array or slice.

#### Syntax

A slice can be created from another array (or slice) called `<array_name>`. The slice will contain elements from `<array_name>[from_index]` up to (but not including) `<array_name>[to_index]`. `<from_index>` and `<to_index>` are optional. If `<from_index>` is left blank, then the slice will start from the first element of `<array_name>`. If `<to_index>` is left blank, the slice will end at the last element of `<array_name>`.

```pseudo
new_slice_from_array := <array_name>[<from_index>:<to_index>]
```

#### Example

A slice created from an array `a`. The slice points to the elements from `a[2]` up to (but not including) `a[5]`.

```go
  s := a[2:5]
```

### An Empty Slice

A slice can be initialized using `make`.

#### Syntax

A slice with zero values can be created using `make()`. The data type, length, and capacity can be set using the syntax below. The new slice will be created with `<length>` number of zero-value elements.

```pseudo
new_slice := make([]<datatype>, <length>, <capacity>)
```

#### Example

A slice containing integers initialized to 0, with length of 5 and a capacity of 9.

```go
  s := make([]int,5,9)
```

#### Codebyte Example

Here is a codebyte example demonstrating the different ways slices can be declared, outputting slice and array data values, length and capacity.

```codebyte/go
package main

import "fmt"

func main() {

  // Declare and initialize a slice in one line
  n := []int{1,2,3,4,5}
  fmt.Println("New Slice:", n,"Len:",len(n),"Cap:",cap(n),"\n")

  // Create a slice from an existing array
  a := [7]int{1,2,3,4,5,6,7}
  s := a[2:5]
  fmt.Println("Array:", a,"Len:",len(a),"Cap:", cap(a))
  fmt.Println("Slice from Array:", s,"Len:",len(s),"Cap:",cap(s),"\n")

  // Create an empty slice, setting length and capacity
  m := make([]int, 3, 8)
  fmt.Println("Empty Slice:", m,"Len:",len(m),"Cap:",cap(m),"\n")

}
```

## Accessing Slice Elements

Slice elements can be accessed in the same way as array elements.

### Syntax

Below is the syntax to access an element at index `<element_index>` from a slice with the name `<slice_name>`.

```pseudo
<slice_name>[<element_index>]
```

### Codebyte Example

This shows how to access a slice element by declaring a slice `s` and then outputting the value of the third element of `s`.

```codebyte/go
package main
import "fmt"
func main() {

  s := []string{"One","Two","Three"}

  // access an element
  fmt.Println("Third Element:", s[2])

}
```
