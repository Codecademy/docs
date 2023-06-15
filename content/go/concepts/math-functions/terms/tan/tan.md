---
Title: 'Tan()'
Description: 'Returns the float64 value that represents the tangent of the given angle.'
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

The **Tan()** function returns the float64 value that represents the tangent of the given angle.

## Syntax

```pseudo
import "math"

result := math.Tan(angle)
```

Where `result` is the cosine value of `angle`.

- The result of `Tan(-Inf)` is `NaN`
- The result of `Tan(+Inf)` is `NaN`
- The result of `Tan(NaN)` is `NaN`

## Example

The following calculates the tangent of angle `Pi/4` and prints out the result:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  angle := math.Pi / 4
  tangent := math.Tan(angle)
  fmt.Printf("%.1f\n", tangent)
}
```

The output will be:

```shell
1.0
```

## Codebyte Example

The following example is runnable and shows the `Tan()` function handling an infinite angle.

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