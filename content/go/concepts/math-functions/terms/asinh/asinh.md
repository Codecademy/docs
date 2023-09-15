---
Title: 'Asinh()'
Description: 'Returns the inverse hyperbolic sine of a number.'
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

The **`Asinh()`** function returns the inverse hyperbolic sine of a number.

## Syntax

```pseudo
result := math.Asinh(number)
```

The `Asinh()` function takes one parameter, `number`, a type of `float64`. It returns a number representing the inverse hyperbolic sine (also known as arcsinh) value of `number` as a type of `float64`. If the value of `number` is:

- Not defined (`undefined`), then it returns `NaN` (Not a Number)
- Positive infinity or equivalent, then it returns `+Inf`
- Negative infinity or equivalent, then it returns `-Inf`

> **Note:** The [`math`](https://www.codecademy.com/resources/docs/go/math-functions) library must be imported first to use this function.

## Example

The following example first calculates the inverse hyperbolic sine of `num` and then prints out the result to the console:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  num := 16.1

  inverseHyperbolicSine := math.Asinh(num)
  fmt.Printf("The inverse hyperbolic sine of %f is %f\n", num, inverseHyperbolicSine)
}
```

The output will be:

```shell
The inverse hyperbolic sine of 16.100000 is 3.472930
```

## Codebyte Example

The following example is runnable and uses the `Asinh()` function with two values: negative infinity and `3.1`.

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  numberInfinity := math.Inf(-1)
  number := 3.1

  resultInfinity := math.Asinh(numberInfinity)
  resultNumber := math.Asinh(number)

  fmt.Printf("The inverse hyperbolic sine of %.1f is: %.1f\n", numberInfinity,  resultInfinity)
  fmt.Printf("The inverse hyperbolic sine of %.1f is: %.1f\n", number, resultNumber)
}
```
