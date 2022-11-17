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

**Slices** in Go point to a section of an array. They are similar to arrays, but with the flexibility of being able to change their size. Care needs to be taken when modifying elements in slices that point to an existing array, as the element value will change in the underlying array. Slices have a length and capacity.

The length is the number of elements in the slice and can be found using `len(slice_name)`.

The capacity can be found using `cap(slice_name)`. It is the number of elements in the underlying array from the slice's start index to the end of the array.

## Creating and Initializing Slices

### Declare and Initialize a New Slice

#### Syntax

```pseudo
new_slice := []<datatype>{<values>}
```

#### Example

A slice containing integers, the length and capacity will both be 5.

```go
  s := []int{1,2,3,4,5}
```

### A Slice from an Existing Array

A slice can be created from another array or slice.

#### Syntax

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

```pseudo
new_slice := make([]<datatype>, <length>, <capacity>)
```

#### Example

A slice containing integers initialized to 0, with length of 5 and a capacity of 9.

```go
  s := make([]int,5,9)
```

#### Codebyte Example

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

```pseudo
<slice_name>[<element_index>]
```

### Codebyte Example

```codebyte/go
package main
import "fmt"
func main() {

  s := []string{"One","Two","Three"}

  // access an element
  fmt.Println("Third Element:", s[2])

}
```
