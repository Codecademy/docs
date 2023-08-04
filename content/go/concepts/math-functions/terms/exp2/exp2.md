---
Title: 'Exp2()'
Description: 'Returns the value of a base-2 exponential of a given number.'
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

The **`Exp2()`** function returns the value of a base-2 exponential of a given number of type `float64`.

## Syntax

```pseudo
import math

result := math.Exp2(x)
```

Where `result` will contain the value of a base-2 exponential of `x`, returned as a `float64`.
Special cases:

- The result of `Exp2(+Inf)` is +Inf
- The result of `Exp2(NaN)` is NaN

## Example

The example below demonstrates the basic use of `Exp2()`:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  x := 4.0
  result1 := math.Exp2(x)
  fmt.Printf("%.1f\n", result1)

  y := -4.0
  result2 := math.Exp2(y)
  fmt.Printf("%.1f\n", result2)
}
```

The output will be:

```shell
16.0
0.1
```

## Codebyte Example

The following example is runnable and shows how the `Exp2()` function handles special cases:

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  fmt.Println(math.Exp2(0))
  fmt.Println(math.Exp2(math.Inf(1)))
  fmt.Println(math.Exp2(math.NaN()))
}
```
