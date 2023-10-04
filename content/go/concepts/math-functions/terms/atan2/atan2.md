---
Title: 'Atan2()'
Description: 'Returns the arctangent value of the x/y value.'
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

The **`Atan2()`** function returns the arctangent value of the *y/x* value.

## Syntax

```pseudo
result := math.Atan2(y,x)
```

Notes on `Atan2()`:

- The ratio of the two arguments `(y/x)` is used to calculate the value of the arc tangent.
- The `result` will be between between -π/2 to π/2 radians.
- The value returned will be of type `float64`.

## Special Cases

`NAN`:
- *Atan2(y, NaN) = NaN*
- *Atan2(NaN, x) = NaN*

`(+-)0:`

- Atan2(+0, x>=0) = +0
- Atan2(-0, x>=0) = -0
- Atan2(y, +Inf) = +0

`(+-)π:`

- Atan2(+0, x<=-0) = +π
- Atan2(-0, x<=-0) = -π
- Atan2(y>0, -Inf) = +π
- Atan2(y<0, -Inf) = -π

`(+-)π/2:`

- Atan2(y>0, 0) = +π/2
- Atan2(y<0, 0) = -π/2
- Atan2(+Inf, x) = +π/2
- Atan2(-Inf, x) = -π/2

`(+-)π/4:`

- Atan2(+Inf, +Inf) = +π/4
- Atan2(-Inf, +Inf) = -π/4

`(+-)3π/4:`

- Atan2(+Inf, -Inf) = 3π/4
- Atan2(-Inf, -Inf) = -3π/4

## Example

The following code calculates the arctangent and prints out the result:

```go
package main

import (
  "fmt"
  "math"
  )

func main() {

    x := math.Atan2(-77, 33)
    fmt.Println(x)

    y := math.Atan2(33, math.NaN())
    fmt.Println(y)
}
```

The output will be:

```shell
-1.1659045405098132
NaN
```
