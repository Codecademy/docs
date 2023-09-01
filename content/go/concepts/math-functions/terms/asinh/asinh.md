---
Title: 'Asinh()'
Description: 'Returns the inverse hyperbolic sine of an angle.'
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

The **`Asinh()`** function returns the inverse hyperbolic sine of an angle.

## Syntax

```pseudo
result := math.Asinh(angle)
```

The `Asinh()` function takes a type `float64` parameter, `angle`, an angle in radians. It returns the hyperbolic sine value of `angle` as a type of `float64`, except if the value of `angle` is:

- Not defined (`undefined`), then it returns `NaN`
- Positive infinity or equivalent, then it returns `+Inf`
- Negative infinity or equivalent, then it returns `-Inf`

> **Note:** The [`math`](https://www.codecademy.com/resources/docs/go/math-functions) library must be imported first to use this function.

## Example

The following example first calculates the inverse hyperbolic sine of `angle` in degrees and then prints out the result to the console:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  angleInDegree := 30.0
  angleInRadian := angleInDegree * math.Pi / 180
  
  hyperbolicSine := math.Asinh(angleInRadian)
  fmt.Printf("The inverse hyperbolic sine of %f degrees is %f\n", angleInDegree, hyperbolicSine)
}
```

The output will be:

```shell
The inverse hyperbolic sine of 30.000000 degrees is 0.502219
```

## Codebyte Example

The following example is runnable and demonstrates the usage of the `Asinh()` function with two values: a negative infinite value and `60.0 degrees`.

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  angleInfinity := math.Inf(-1)
  angle := 180.0
  angleInRadian := angle * math.Pi / 180

  resultInfinity := math.Asinh(angleInfinity)
  resultAngle := math.Asinh(angleInRadian)

  fmt.Printf("The inverse hyperbolic sine of negative infinity is: %.1f\n", resultInfinity)
  fmt.Printf("The inverse hyperbolic sine of %.1f is: %.1f\n", angle, resultAngle)
}
```
