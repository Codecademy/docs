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
result := Modf(f float64) (int float64, frac float64)
```

Where:

- `f`: is the floating-point number for which you want to extract the integer and fractional parts.
- `float64`: is a type of numer that uses 64 bytes.
- `int`: is the integer part of the passed parameter.
- `frac`: is the fractional part of the passed parameter.

Some special return cases:

- If (±)Inf is passed as an argument, then `Modf` returns (±)Inf and `NAN`.
- If the argument passed is `NAN`, then Modf returns `NAN` and `NAN`.


## Example

Below is a simple example where we find out the integer and fractional parts of 3.3456.

```go
package main

import(
  "fmt" 
  "math"
) 

func main() {
  var x float64 = 3.3456

  var w,z float64 = math.Modf(x)
	fmt.Print("For ", x," integer part: ", w, " fractional part: ",z)
} 
```

The output will be:

```shell
For 3.3456 integer part: 3 fractional part: 0.34560000000000013
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
    // Contain both integer and fraction
    integer, fraction := math.Modf(2.5)
    fmt.Printf("Integer: %f. Fraction: %f\n", integer, fraction)

    // Contain only integer part
    integer, fraction = math.Modf(2)
    fmt.Printf("Integer: %f. Fraction: %f\n", integer, fraction)

    // Negative floating point number
    integer, fraction = math.Modf(-2.5)
    fmt.Printf("Integer: %f. Fraction: %f\n", integer, fraction)

    // Contains only fraction part
    integer, fraction = math.Modf(0.5)
    fmt.Printf("Integer: %f. Fraction: %f\n", integer, fraction)

}
```
