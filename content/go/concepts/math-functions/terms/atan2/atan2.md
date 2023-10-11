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

The **`Atan2()`** function returns the arctangent value of the _y/x_ value.

## Syntax

```pseudo
result := math.Atan2(y,x)
```

Notes on `Atan2()`:

- The ratio of the two arguments `(y/x)` is used to calculate the value of the arctangent.
- The `result` will be between between -π/2 to π/2 radians.
- The value returned will be of type `float64`.

### Special Cases

`NAN`:

- _Atan2(y, NaN) = NaN_
- _Atan2(NaN, x) = NaN_

`(+-)0:`

- _Atan2(+0, x>=0) = +0_
- _Atan2(-0, x>=0) = -0_
- _Atan2(y, +Inf) = +0_

`(+-)π:`

- _Atan2(+0, x<=-0) = +π_
- _Atan2(-0, x<=-0) = -π_
- _Atan2(y>0, -Inf) = +π_
- _Atan2(y<0, -Inf) = -π_

`(+-)π/2:`

- _Atan2(y>0, 0) = +π/2_
- _Atan2(y<0, 0) = -π/2_
- _Atan2(+Inf, x) = +π/2_
- _Atan2(-Inf, x) = -π/2_

`(+-)π/4:`

- _Atan2(+Inf, +Inf) = +π/4_
- _Atan2(-Inf, +Inf) = -π/4_

`(+-)3π/4:`

- _Atan2(+Inf, -Inf) = 3π/4_
- _Atan2(-Inf, -Inf) = -3π/4_

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
