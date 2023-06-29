---
Title: 'Pow()'
Description: 'Returns the first argument raised to the power of the second argument.'
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

The **`Pow()`** function returns the base x raised to the power y. The `math` library must be imported in order to use this function.

## Syntax

```pseudo
result := math.Pow(x, y)
```

Where `result` is the value of x raised to the power y, returned as a float64, except under the following circumstances:

- The result of `Pow(x, ±0)` is `1` for any `x`
- The result of `Pow(1, y)` is `1` for any `y`
- The result of `Pow(x, 1)` is `x` for any `x`
- The result of `Pow(NaN, y)` is `NaN`
- The result of `Pow(NaN, y)` is `NaN`
- The result of `Pow(x, NaN)` is `NaN`
- The result of `Pow(±0, y)` is `±Inf` for `y an odd integer < 0`
- The result of `Pow(±0, -Inf)` is `+Inf`
- The result of `Pow(±0, +Inf)` is `+0`
- The result of `Pow(±0, y)` is `+Inf` for finite `y < 0` and not an `odd integer`
- The result of `Pow(±0, y)` is `±0` for `y an odd integer > 0`
- The result of `Pow(±0, y)` is `+0` for finite `y > 0` and not an `odd integer`
- The result of `Pow(-1, ±Inf)` is `1`
- The result of `Pow(x, +Inf)` is `+Inf` for `|x| > 1`
- The result of `Pow(x, -Inf)` is `+0` for `|x| > 1`
- The result of `Pow(x, +Inf)` is `+0` for `|x| < 1`
- The result of `Pow(x, -Inf)` is `+Inf` for `|x| < 1`
- The result of `Pow(+Inf, y)` is `+Inf` for `y > 0`
- The result of `Pow(+Inf, y)` is `+0` for `y < 0`
- The result of `Pow(-Inf, y)` is `Pow(-0, -y)`
- The result of `Pow(x, y)` is `NaN` for finite `x < 0` and finite `non-integer y`

## Example

The following example calculates the result of `base` raised to the power `exponent` and prints out the result:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  c := math.Pow(2, 3)
  fmt.Printf("%.1f", c)
}
```

The output will be:

```shell
8.0
```

## Codebyte Example

The following example is runnable and shows how the `Pow()` function can be used in a program:

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  base := 5.0
  exponent := 2.0
  result := math.Pow(base, exponent)

  fmt.Printf("The result of %.2f raised to the power of %.2f is %.2f\n", base, exponent, result)
}
```
