---
Title: 'Asin()'
Description: 'Returns the inverse sine of a number.'
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

The **`Asin()`** function returns the inverse sine of a number.

## Syntax

```pseudo
result := math.Asin(number)
```

The `Asin()` function takes one parameter, `number`, a type of `float64`, which must be within the range of `-1` and `1` (inclusive).

The `Asin()` function returns a number, the inverse sine (also known as arcsine) value of `number` as a `float64`. This returned value represents an angle in radians whose sine equals the `number`. If the value of `number` is:

- Zero (`0`), then it returns `0`
- Less than `-1`, then it returns `NAN` (Not a Number)
- Greater than `1`, then it returns `NAN`

> **Note:** The [`math`](https://www.codecademy.com/resources/docs/go/math-functions) library must be imported first to use this function.

## Example

The following example first calculates the inverse sine of `num` and then prints out the result to the console:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  num := 0.9

  inverseSine := math.Asin(num)
  fmt.Printf("The inverse sine of %f is %f\n", num, inverseSine)
}
```

The output will be:

```shell
The inverse sine of 0.900000 is 1.119770
```

## Codebyte Example

The following example is runnable and uses the `Asin()` function with two values: `1.1` and `0.0`.

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  notInRange := 1.1
  zero:= 0.0

  resultNotInRange := math.Asin(notInRange)
  resultZero := math.Asin(zero)

  fmt.Printf("The inverse sine of %.1f is: %.1f\n", notInRange, resultNotInRange)
  fmt.Printf("The inverse sine of %.1f is: %.1f\n", zero, resultZero)
}
```
