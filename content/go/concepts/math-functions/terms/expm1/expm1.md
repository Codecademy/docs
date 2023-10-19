---
Title: 'Expm1()'
Description: 'Returns the value of e raised to the power of the given parameter minus 1.'
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

The **`Expm1()`** function calculates _e_ (the base of the natural logarithm) raised to the given argument minus one. The formula is written as follows:

```tex
Expm1(x) = e^{x} - 1
```

## Syntax

```pseudo
import math

value := math.Expm1(x)
```

Where `value` will contain the result of the calculation using the passed argument, `x`, returned as a `float64`.
Special cases:

- `Expm1(+Inf)` yields `+Inf`
- `Expm1(-Inf)` yields `-1`
- `Expm1(NaN)` yields `NaN`

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
    value_1 := math.Expm1(7.3)
    value_2 := math.Expm1(-3)
    res := value_1 + value_2
    fmt.Printf("%.1f + %.1f = %.1f",value_1, value_2, res)
}
```
