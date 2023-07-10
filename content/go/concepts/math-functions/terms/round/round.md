---
Title: 'Round()'
Description: 'Rounds the given number to the nearest integer.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Math'
  - 'Functions'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`Round()`** function in Go is used to round a given number to the nearest integer. This function is part of the `math` package, and the package must be imported to use the function in a Go program.

## Syntax

```pseudo
result := math.Round(x)
```

Where:

- `x`: is the number to be rounded.
- `result`: is the rounded value returned as a float64.

## Example

The following example demonstrates how to use the `Round()` function to round a number and print the result:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  number := 3.7
  rounded := math.Round(number)
  fmt.Printf("Rounded value: %.0f\n", rounded)
}
```

The output will be:

```shell
Rounded value: 4
```

## Codebyte Example

The following example shows how the `Round()` function can be used in a Go program:

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  // Round positive and negative numbers
  fmt.Println(math.Round(2.5))
  fmt.Println(math.Round(2.4))
  fmt.Println(math.Round(-2.5))
  fmt.Println(math.Round(-2.4))

  // Round float64 values
  fmt.Println(math.Round(5.78))
  fmt.Println(math.Round(9.01))

  // Round zero
  fmt.Println(math.Round(0))
}
```
