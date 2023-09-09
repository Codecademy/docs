---
Title: 'Cosh()'
Description: 'Returns the hyperbolic cosine of a given value.'
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

The **`Cosh()`** of the `math` package is an inbuilt function which takes a given value and returns its hyperbolic consine.

## Syntax

```pseudo
import "math"

CoshX = math.Cosh(x)
```

Where `CoshX` is the hyperbolic cosine value of `x`, it is of type _float64_. It always return the hyperbolic consine value except some special cases:

- CoshX of `Cosh(±0)` is `1`
- CoshX of `Cosh(±Inf)` is `+Inf`
- CoshX of `Cosh(NaN)` is `NaN`

## Example

The following Golang Program calculates the hyperbolic cosine of `x` and prints out the result:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  fmt.Println(math.Cosh(5))
  fmt.Println(math.Cosh(-5))
}
```

The output will be:

```shell
74.21
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
