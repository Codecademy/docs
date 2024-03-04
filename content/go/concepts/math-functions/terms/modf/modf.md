---
Title: 'Modf()'
Description: 'Returns the integer and fractional part of a floating-point number.'
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

The **`Modf()`** function in Go is used to find the integer and fractional part of a floating-point number. This function is part of the `math` package, and the package must be imported to use the function in a Go program.

## Syntax

```pseudo
int, frac := Modf(f)
```

Where:

- `f`: is the floating-point number to extract the integer and fractional parts from.
- `int`: is the integer part of the passed parameter.
- `frac`: is the fractional part of the passed parameter.

Some special return cases:

- If (±)Inf is passed as an argument, then `Modf` returns (±)Inf and `NAN`.
- If the argument passed is `NAN`, then the return will also be `NAN`.

## Example

Below is a basic implementation of the `Modf()` function.

```go
package main

import(
  "fmt"
  "math"
)

func main() {
  var x float64 = 3.3456

  var w, z float64 = math.Modf(x)
  fmt.Print("The value ", x, " is composed of the integer: ", w, " and the fractional part: ", z)
}
```

The output will be:

```shell
The value 3.3456 is composed of the integer: 3 and the fractional part: 0.34560000000000013
```

## Codebyte Example

The following example shows how the `Modf()` function can be used in a Go program:

```codebyte/golang
package main

import (
    "fmt"
    "math"
)

func main() {
    // A value with an integer and fraction
    integer, fraction := math.Modf(2.5)
    fmt.Printf("Integer: %f. Fraction: %f\n", integer, fraction)

    // An integer
    integer, fraction = math.Modf(2)
    fmt.Printf("Integer: %f. Fraction: %f\n", integer, fraction)

    // A negative floating point number
    integer, fraction = math.Modf(-2.5)
    fmt.Printf("Integer: %f. Fraction: %f\n", integer, fraction)

    // A number of a fractional value
    integer, fraction = math.Modf(0.5)
    fmt.Printf("Integer: %f. Fraction: %f\n", integer, fraction)
}
```
