---
Title: 'Tan()'
Description: 'Returns the tangent of the given angle.'
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

The **`Tan()`** function returns the tangent of an angle given in radians. The `math` library must be imported in order to use this function.

## Syntax

```pseudo
result := math.Tan(angle)
```

Where `result` is the tangent value of `angle`, returned as a float, except under the following circumstances:

- The result of `Tan(-Inf)` is `NaN`
- The result of `Tan(+Inf)` is `NaN`
- The result of `Tan(NaN)` is `NaN`

## Example

The following calculates the tangent of `angle` and prints out the result:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  angle := math.Pi / 6
  tangent := math.Tan(angle)
  fmt.Printf("%.1f\n", tangent)
}
```

The output will be:

```shell
0.6
```

## Codebyte Example

The following example is runnable and shows how the `Tan()` function handles infinite values.

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  positiveInfinity := math.Inf(1)
  negativeInfinity := math.Inf(-1)

  tanPositiveInf := math.Tan(positiveInfinity)
  tanNegativeInf := math.Tan(negativeInfinity)

  fmt.Printf("The tangent of positive infinity: %f\n", tanPositiveInf)
  fmt.Printf("The tangent of negative infinity: %f\n", tanNegativeInf)
}
```
