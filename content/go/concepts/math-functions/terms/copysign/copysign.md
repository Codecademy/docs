---
Title: 'Copysign()'
Description: 'Returns a value with the magnitude and sign of the given arguments.'
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

The **`Copysign()`** of the `math` package is an inbuilt function that returns a value based on the magnitude of the first argument and the sign of the second argument.

## Syntax

```pseudo
import "math"

CpSgnXY = math.Copysign(x, y)
```

Where `CpSgnXY` is the value, of type `float64`, composed of the magnitude of `x` and the sign of `y`.

## Example

The following code demonstrates the basic implementations of `.Copysign()`:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  fmt.Println(math.Copysign(4.9, -1))
}
```

The output will be:

```shell
-4.9
```

## Codebyte Example

The following example shows how the `Copysign()` function handles various arguments.

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  var x float64
  var y float64
  var CpSgnXY float64

  x = 8.7
  y = -2.1
  CpSgnXY = math.Copysign(x, y)
  fmt.Println("Copysigned value of x, y, = ", CpSgnXY)

  x = 25
  y = -2.5
  CpSgnXY = math.Copysign(x, y)
  fmt.Println("Copysigned value of x, y, = ", CpSgnXY)

  x = -5
  y = -6
  CpSgnXY = math.Copysign(x, y)
  fmt.Println("Copysigned value of x, y, = ", CpSgnXY)
}
```
