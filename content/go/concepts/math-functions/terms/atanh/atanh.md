---
Title: 'Atanh()'
Description: 'Returns the inverse hyperbolic tangent of the given value.'
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

The **`Atanh()`** function takes a float64 argument representing the angle whose inverse hyperbolic tangent value is to be returned. It returns this inverse hyperbolic tangent as a float64 value that can range from negative infinity to positive infinity.

## Syntax

```pseudo
result := math.Atanh(x)
```

Where `x` represents the angle whose inverse hyperbolic tangent value is to be returned, and `result` is the inverse hyperbolic tangent of `x`. Some special exceptions include:

- `Atanh(-1)` equals `-Inf`
- `Atanh(1)` equals `+Inf`

## Example

The following code calculates the arctangent and prints out the result:

```go
package main

import (
  "fmt"
  "math"
  )

func main() {

  fmt.Println(math.Atanh(0.5))
  fmt.Println(math.Atanh(math.NaN()))

}
```

The output will be:

```shell
0.5493061443340548
NaN
```
