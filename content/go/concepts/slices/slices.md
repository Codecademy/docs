---
Title: 'Slices'
Description: 'A slice in Go is a pointer to a section of an array. They are like arrays but can be dynamically sized.'
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

A **slice** in Go is a pointer to a section of an array. They are like arrays but can be dynamically sized. Care needs to be taken when modifying elements in slices, as the element value will change in the underlying array. A slice has a length and a capacity.

The length of a slice is the number of elements in the slice. The length can be found using `len(slice_name)`.

The capacity of a slice is the number of elements in the underlying array from the slice's start index to the end of the array. The capacity can be found using `cap(slice_name)`.

## Creating and Initializing Slices

### Declare and Initialize a New Slice

Slices can be declared and initialized in one line.

#### Syntax

```pseudo
new_slice := []datatype{values}
```

A slice is declared and initialized, similar to arrays, with a data type and list of values. However, the size is not specified within the square brackets `[]`.

#### Example

Below, a new slice containing integers is created with a length and capacity of 5:

```go
s := []int{1, 2, 3, 4, 5}
```

### A Slice from an Existing Array

A slice can be created from another array or slice.

#### Syntax

```pseudo
new_slice_from_array := array_name[start_index:end_index]
```

A slice can be created from another array or slice (`array_name`). The slice will contain elements from the `start_index` up to (but not including) the `end_index`. If the `start_index` is left blank, then the slice will start from the first element of `array_name`. If the `end_index` is left blank, the slice will end at the last element of `array_name`.

#### Example

The example below declares a slice that points to an array's elements from index `2` to `5` (not including `5`):

```go
s := array_name[2:5]
```

### An Empty Slice

A slice can also be initialized using the `make()` function.

#### Syntax

A slice with zero values can be created using `make()`. The data type, length, and capacity can be set using the syntax below. The new slice will be created with `length` number of zero-value elements.

```pseudo
new_slice := make([]datatype, length, capacity)
```

#### Example

A slice containing integers initialized to 0, with a length of `5` and a capacity of `9`.

```go
s := make([]int, 5, 9)
```

#### Codebyte Example

The codebyte below demonstrates the different ways slices can be declared, outputting slice and array data values, and length and capacity.

```codebyte/go
package main

import "fmt"

func main() {

  // Declare and initialize a slice in one line
  n := []int{1, 2, 3, 4, 5}
  fmt.Println("New Slice:", n, "Length:", len(n), "Capacity:", cap(n), "\n")

  // Create a slice from an existing array
  a := [7]int{1, 2, 3, 4, 5, 6, 7}
  s := a[2:5]
  fmt.Println("Array:", a, "Length:", len(a), "Capacity:", cap(a))
  fmt.Println("Slice from Array:", s, "Length:", len(s), "Capacity:", cap(s), "\n")

  // Create an empty slice, setting length and capacity
  m := make([]int, 3, 8)
  fmt.Println("Empty Slice:", m, "Length:", len(m), "Capacity:", cap(m), "\n")

}
```

## Accessing Slice Elements

Slice elements can be accessed in the same way as array elements.

### Syntax

```pseudo
slice_name[element_index]
```

A given value is accessed by passing the `element_index` in `[]` with the `slice_name`.

### Codebyte Example

This shows how to access a slice element by declaring a slice `s` and then outputting the value of the third element of `s`.

```codebyte/go
package main

import "fmt"

func main() {

  s := []string{"One", "Two", "Three"}

  // Access an element
  fmt.Println("Third Element:", s[2])

}
```

## Appending a Slice

Elements can be added to a slice with the `append()` function. Slices, or rather the underlying arrays that they reference, are stored in memory in sequential locations. If elements are appended beyond the initial capacity of a slice, then `append()` will leverage the Go runtime to provision a new slice with a greater capacity. If the length of the slice is less than 1,024 the capacity will double when a new slice is required, otherwise it will increase by 25%.

### Syntax

```pseudo
new_slice = append(new_slice, 1, 2, 3, n)
```

One or more values can be passed with the slice to `append()`.

### Codebyte Example

The example below demonstrates the use of `append()` and the resulting changes to the length and capacity of the slice.

```codebyte/go
package main

import "fmt"

func main() {

  s := make([]int, 2)

  // Print the initial length and capacity
  fmt.Println("Length:", len(s), "Capacity:", cap(s))

  // Append an element
  s = append(s, 1, 2)
  fmt.Println("Length:", len(s), "Capacity:", cap(s))

  // Append another element
  s = append(s, 3)
  fmt.Println("Length:", len(s), "Capacity:", cap(s))

}
```
