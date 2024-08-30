---
Title: 'Hypot()'
Description: 'Returns the square root of the sum of two squares.'
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

The **`Hypot()`** function returns the square root of the sum of two squares. In other words, the method returns the result of the following formula:

```tex
hypotenuse = \sqrt{(x * x) + (y * y)}
```

## Syntax

```pseudo
import math

result := math.Hypot(x, y)
```

`Hypot()` accepts two arguments (`x` , `y`) of type `float64` and returns a value of type `float64`.

Note:

- If either argument is negative, or both, the result is positive.
- If either argument is positive infinity (`+Inf`), the result will be positive infinity.
- If `0` is passed as both arguments, the result is `0`. If one of the arguments is `0` the result is equal to the other argument.
- If either argument passed is `NaN`, the result will be `NaN`.

## Example

```go
package main

import("fmt"
      "math")

func main() {
  fmt.Printf("Hypotenuse of 3 and 4 = %f\n", math.Hypot(3 , 4))
  fmt.Printf("Hypotenuse of -1.5 and -1.5 = %f\n", math.Hypot(-1.5,-1.5))

}
```

The above example results in the following output:

```shell
Hypotenuse of 3 and 4 = 5.000000
Hypotenuse of -1.5 and -1.5 = 2.121320
```

## Codebyte Example

The runnable example of the `Hypot()` function of the cases where `0` or a negative number is at least one of the arguments.

```codebyte/golang
package main

import("fmt"
       "math")

func main() {
    fmt.Printf("Hypotenuse of -6 and 8 = %f\n", math.Hypot(-6, 8))
    fmt.Printf("Hypotenuse of 12 and 0 = %f\n", math.Hypot(12, 0))
}
```
