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

The `Acosh()` function takes one parameter, `number`, a type of `float64`. It returns a value as a `float64`. This value represents the inverse hyperbolic cosine, also known as arccosh, of `number`. It's important to note that the returned value is in radians. If the value of `number` is:

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
  fmt.Println(math.Acos(-1))
  fmt.Println(math.Acos(1.23))
}
```

The output will be:

```shell
3.141592653589793
NaN
```

## Codebyte Example

The following example is runnable and uses the `Acosh()` function with two values: negative infinity and `3.1`.

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
