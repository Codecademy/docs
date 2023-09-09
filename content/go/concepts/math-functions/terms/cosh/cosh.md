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

The **`Cosh()`** of the `math` package is an inbuilt function which takes a given value and returns its hyperbolic consine value.

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
74.21
```

## Codebyte Example

The following example shows how the `Cosh()` function handles float64 arguments including _special cases_ arguments.

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  var x float64

  x = 5
  CoshX := math.Cosh(x)
  fmt.Println("Hyperbolic cosine value of", x, "is", CoshX)

  x = -5
  CoshX := math.Cosh(x)
  fmt.Println("Hyperbolic cosine value of", x, "is", CoshX)

  x = math.NaN()
  CoshX := math.Cosh(x)
  fmt.Println("Hyperbolic cosine value of", x, "is", CoshX)
}
```
