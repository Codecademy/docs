---
Title: 'Acosh()'
Description: 'Returns the inverse hyperbolic cosine value of a number.'
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

The **`Acosh()`** function returns the arccosine, also known as the inverse hyperbolic cosine, value of the argument (in radians).

## Syntax

```pseudo
result := math.Acosh(x)
```

Notes on the parameter:

- `x` is the value whose arccosine value is to be found.
- The range must be between `-1` and `1`.
- If the parameter is either less than `-1` or greater than `1` it returns `NaN`.
- The value returned will be of type `float64`.

## Example

The following code calculates the arccosine and prints out the result:

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
