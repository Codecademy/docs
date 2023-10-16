---
Title: 'Expm1()'
Description: 'Returns the value of e raised to the power of the parameter x minus 1.'
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

The `Expm1()` function returns the value of e^x - 1, where `e` is the base of the natural logarithm and `x` is the parameter.


## Syntax

```pseudo
import math

value := math.Expm1(x)
```

Where `result` will contain the value of e^x - 1, and  `x`, returned as a `float64`.
Special cases:

- The result of `Expm1(+Inf)` is +Inf
- The result of `Expm1(-Inf)` is -1
- The result of `Expm1(NaN)` is NaN

## Example

The example below demonstrates the basic use of `Expm1()`:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  result := math.Expm1(2)
  fmt.Printf("%.1f\n", result)
}
```

The output will be:

```shell
6.4
```

## Codebyte Example

The following example is runnable and shows how the `Expm1()` function handles special cases:

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  x := 2.0
  result := math.Expm1(x)
  fmt.Printf("%.1f\n", result)
}
```
