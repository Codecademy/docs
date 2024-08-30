---
Title: 'Tanh()'
Description: 'Returns the hyperbolic tangent of a number.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Numbers'
  - 'Math'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`Tanh()`** function returns the hyperbolic tangent of a given number.

## Syntax

```pseudo
import "math"

result := math.Tanh(number)
```

`Tanh()` accepts an argument, `number`, of type `float64` and returns a value of type `float64`.

Special cases:

- The result of `Tanh(math.Inf(-1))` is `-1`. `math.Inf(-1)` represents negative infinity, which is `-Inf`.
- The result of `Tanh(math.Inf(+1))` is `+1`. `math.Inf(+1)` represents positive infinity, which is `+Inf`.
- The result of `Tanh(0)` is `0`.
- The result of `Tanh(NaN)` is `NaN`.

## Example

The following calculates the hyperbolic tangent of `0.5` and prints out the result:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  value := math.Tanh(0.5)
  fmt.Printf("%.2f\n", value)
}
```

The output will be:

```shell
0.46
```

## Codebyte

The following example is runnable and shows the `Tanh()` function handling the value `1`.

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  value := math.Tanh(1)
  fmt.Printf("%.2f\n", value)
}
```
