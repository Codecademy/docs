---
Title: 'Sqrt()'
Description: 'Returns the square root of a given number.'
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

The **`Sqrt()`** function returns the square root of a given number.

## Syntax

```pseudo
import math

sqrt = math.Sqrt(x)
```

`Sqrt()` accepts an argument of type `float64` and returns a value of type `float64`.

Note these special cases:

- The result of calling `Sqrt()` with a negative number is `NaN`.
- If `0` is passed as the argument the result is `0`.
- Passing `+Inf` to `Sqrt()` results in `+Inf`.
- If `Sqrt()` is called with `NaN` as the argument the result is `Nan`.

## Example

```go
package main

import (
    "fmt"
    "math"
)

func main() {
    fmt.Printf("Square root of 9 = %f\n", math.Sqrt(9))
    fmt.Printf("Square root of 12.5 = %f\n", math.Sqrt(12.5))
}
```

The above code results in the following output:

```shell
Square root of 9 = 3.000000
Square root of 12.5 = 3.535534
```

## Codebyte Example

The runnable example demonstrates the output of `Sqrt()` in the special cases where `0` or a negative number are supplied as arguments.

```codebyte/golang
package main

import (
    "fmt"
    "math"
)

func main() {
    fmt.Printf("Square root of 0 = %f\n", math.Sqrt(0))
    fmt.Printf("Square root of -5 = %f\n", math.Sqrt(-5))
}
```
