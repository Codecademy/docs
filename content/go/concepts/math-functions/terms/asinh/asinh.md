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

Where `result` is the cosine value of `angle`, returned as a float, except under the following circumstances:

- The result of `Cos(-Inf)` is `NaN`
- The result of `Cos(+Inf)` is `NaN`
- The result of `Cos(NaN)` is `NaN`

> **Note:** To use this function the `math` library must be imported.

## Example

The following calculates the cosine of `angle` and prints out the result:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  angle := math.Pi / 6
  cosine := math.Cos(angle)
  fmt.Printf("%.1f\n", cosine)
}
```

The output will be:

```shell
0.9
```

## Codebyte Example

The following example is runnable and shows how the `Cos()` function handles infinite values.

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
