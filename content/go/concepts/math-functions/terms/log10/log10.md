---
Title: 'Log10()'
Description: 'Returns the base-10 logarithm of a given number.'
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

The **`Log10()`** function in the Go programming language calculates the base-10 logarithm of a given number. It returns the logarithm value as a floating-point number. The `math` package must be imported to use this function.

## Syntax

```pseudo
result := Log10(x)
```

`Log10()` accepts an argument of type `float64` and returns a value of type `float64`.

Note these special cases:

- If `x` is negative or `Nan`, the function will return `NaN` (not-a-number).
- If `x` is zero, the result will be `-Inf`.
- If `x` is `+Inf`, the result will be `+Inf`.

## Example

The example below demonstrates the basic use of `Log10()`.

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  x := 10.0
  result := math.Log10(x)
  fmt.Printf("Log10(%f) = %f\n", x, result)
}
```

The above code results in the following output:

```shell
Log10(10.000000) = 1.000000
```

## Codebyte Example

The example below is runnable and demonstrates the results of `Log10()` with several values.

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  numbers := []float64{2.0, 10.0, 0.5, 100.0}

  fmt.Println("Log10 Calculations:")
  for _, x := range numbers {
    result := math.Log10(x)
    fmt.Printf("Log10(%.2f) = %.2f\n", x, result)
  }
}
```
