---
Title: 'Asinh()'
Description: 'Returns the hyperbolic sine of an angle.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Math'
  - 'Trigonometry'
  - 'Functions'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`Asinh()`** function returns the hyperbolic sine of an angle.

## Syntax

```pseudo
result := math.Asinh(angle)
```

The `Asinh()` function takes a type `float64` parameter, `angle`, an angle in radians. It returns the hyperbolic sine value of `angle` as a type of `float64`, except if  the value of `angle` is:

- Not defined (`undefined`), then it returns `NaN`
- Infinity or equivalent (`+Inf` or `-Inf`), then it returns `NaN`

> **Note:** To use this function the `math` library must be imported first.

## Example

The following example first calculates the hyperbolic sine of `angle` in degrees and then prints out the result to the console:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  angle := 90
  hyperbolicSine := math.Asinh(angle * math.Pi / 180) // Convert 90(in degrees) to radians
  fmt.Printf("%.1f\n", "The hyperbolic sine of", angle, "degrees is", hyperbolicSine)
}
```

The output will be:

```shell
0.9
```

## Codebyte Example

The following example is runnable and shows how the `Asinh()` function handles infinite values.

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  positiveInfinity := math.Inf(1)
  negativeInfinity := math.Inf(-1)

  cosPositiveInf := math.Cos(positiveInfinity)
  cosNegativeInf := math.Cos(negativeInfinity)

  fmt.Printf("The cosine of positive infinity: %f\n", cosPositiveInf)
  fmt.Printf("The cosine of negative infinity: %f\n", cosNegativeInf)
}
```
