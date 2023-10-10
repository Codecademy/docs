---
Title: 'Log2()'
Description: 'Returns the base-2 logarithm of a given number.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Math'
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`Log2()`** function in the Go programming language calculates the base-2 logarithm of a given number. It returns the logarithm value as a floating-point number. The `math` package must be imported to use this function.

## Syntax

```pseudo
result := Log2(x)
```

`Log2()` accepts an argument of type `float64` and returns a value of type `float64`.

Note these special cases:

- If `x` is negative or `NaN`, the function will return `NaN` (not-a-number).
- If `x` is zero, the function will return `-Inf`.
- If `x` is `+Inf`, the function will return `+Inf`.

## Example

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  x := 8.0
  result := math.Log2(x)
  fmt.Printf("Log2(%f) = %f\n", x, result)
}
```

The above code results in the following output:

```shell
Log2(8.000000) = 3.000000
```

## Codebyte Example

The example below is runnable and demonstrates `Log2()` on a range of values.

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  numbers := []float64{2.0, 0.0, 0.5, 100.0}

  fmt.Println("Log2 Calculations:")

  for _, x := range numbers {
    result := math.Log2(x)
    fmt.Printf("Log2(%.2f) = %.2f\n", x, result)
  }
}
```
