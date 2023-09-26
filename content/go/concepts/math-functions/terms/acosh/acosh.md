---
Title: 'Acosh()'
Description: 'Returns the inverse hyperbolic cosine of a number.'
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

The **`Acosh()`** function returns the inverse hyperbolic cosine of a number.

## Syntax

```pseudo
result := math.Acosh(number)
```

The `Acosh()` function takes one parameter, `number`, of type `float64`. And the method also returns a `float64`. This value represents the inverse hyperbolic cosine, or arccosh, of `number`. It's important to note that the returned value is in radians. If the value of `number` is:

- Not defined (`undefined`), then it returns `NaN` (Not a Number)
- Less than `1`, including negative infinity (`-Inf`) or equivalent, then it returns `NaN`
- Greater than or equal to `1`, including positive infinity (`+Inf`) or equivalent, then it returns `+Inf`

> **Note:** The [`math`](https://www.codecademy.com/resources/docs/go/math-functions) library must be imported first to use this function.

## Example

The following example first calculates the inverse hyperbolic cosine of `num` and then prints out the result to the console:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  num := 16.0

  inverseHyperbolicCosine := math.Acosh(num)
  fmt.Printf("The inverse hyperbolic cosine of %f is %f\n", num, inverseHyperbolicCosine)
}
```

The output will be:

```shell
The inverse hyperbolic cosine of 16.000000 is 3.464758
```

## Codebyte Example

The following example is runnable and uses the `Acosh()` function with two values: positive infinity and `0.5`:

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  numberInfinity := math.Inf(1)
  number := 0.5

  resultInfinity := math.Acosh(numberInfinity)
  resultNumber := math.Acosh(number)

  fmt.Printf("The inverse hyperbolic cosine of %.1f is: %.1f\n", numberInfinity,  resultInfinity)
  fmt.Printf("The inverse hyperbolic cosine of %.1f is: %.1f\n", number, resultNumber)
}
```
