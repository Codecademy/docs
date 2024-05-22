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

The **`Cosh()`** of the `math` package is an inbuilt function that takes a given value and returns its hyperbolic cosine value.

## Syntax

```pseudo
import "math"

CoshX = math.Cosh(x)
```

Where `CoshX` is the hyperbolic cosine value of `x`, it is of type `float64`. It always returns the hyperbolic cosine value except for some special cases:

- `Cosh(±0)` is `1`
- `Cosh(±Inf)` is `+Inf`
- `Cosh(NaN)` is `NaN`

## Example

The following Golang program calculates the hyperbolic cosine of `x` and prints out the result:

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

The following example shows how the `Cosh()` function handles float64 arguments including special cases.

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  var x float64
  var CoshX float64

  x = 3
  CoshX = math.Cosh(x)
  fmt.Println("Hyperbolic cosine value of", x, "is", CoshX)

  x = -6
  CoshX = math.Cosh(x)
  fmt.Println("Hyperbolic cosine value of", x, "is", CoshX)

  x = math.NaN()
  CoshX = math.Cosh(x)
  fmt.Println("Hyperbolic cosine value of", x, "is", CoshX)
}
```
