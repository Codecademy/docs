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

The **`Pow()`** function returns the base _x_ raised to the power _y_. The `math` library must be imported in order to use this function.

## Syntax

```pseudo
result := math.Pow(x, y)
```

Where `result` is the value of `x` raised to the power `y`, returned as a float64, except under the following circumstances:

- If `y` is `0` or `x` is `1`, the result is always `1`.
- If either `x` or `y` is `NaN`, the result is `NaN`.
- If `x` is `0`, the result depends on the sign and type (odd or not) of `y`. It can be `+Inf`, `-Inf`, or `0`.
- If `x` is `+Inf` or `-Inf`, the result depends on the sign of `y` and can be `+Inf`, `-Inf`, or `0`.
- If `x` is a finite negative number and `y` is a finite non-integer, the result is `NaN`.

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
